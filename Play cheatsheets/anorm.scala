package models

import anorm._
import anorm.SqlParser._
import play.api.db.DB
import play.api.Play.current

///////////EVOLUTIONS, 1.sql:
create table User (
    id int primary key not null auto_increment,
    username varchar(255) not null,
    email varchar(255) not null,
    age smallint not null
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# --- !Downs

drop table User;


//////////MODEL
case class User(id: Pk[Int], username: String, email: String, age: Int)

object User {

  def save(user: User) {
    DB.withConnection { implicit connection =>
      SQL(""" 
            INSERT INTO User(username, email, age) 
            VALUES({username}, {email}, {age})
      """).on(
          'username -> user.username,
          'email -> user.email,
          'age -> user.age
      ).executeUpdate
    }
  }

	private val userParser: RowParser[User] = {
		get[Pk[Int]]("id") ~
		  get[String]("username") ~
		  get[String]("email") ~
		  get[Int]("age") map {
		  case id ~ username ~ email ~ age => User(id, username, email, age)
		}
	  }

	def list = {
		DB.withConnection { implicit connection =>
		  SQL("SELECT * from User").as(userParser *)
		}
	  }

	def load(id: Int): Option[User] = {
		DB.withConnection { implicit connection =>
		  SQL("SELECT * from User WHERE id = {id}")
		    .on('id -> id)
		    .as(userParser.singleOpt)
		}
	  }

	def update(id: Int, user: User) {
		DB.withConnection { implicit connection =>
		  SQL(""" 
		        UPDATE User SET
		        username = {username},
		        email = {email},
		        age = {age}
		        WHERE id = {id}
		  """).on(
		      'id -> id,
		      'username -> user.username,
		      'email -> user.email,
		      'age -> user.age
		  ).executeUpdate
		}
	  }

	def delete(id: Int) {
		DB.withConnection { implicit connection =>
		  SQL(""" 
		      DELETE FROM User where id = {id}
		  """).on(
		      'id -> id
		  ).executeUpdate
		}
	  }
	
	def selectBoxOptions: Seq[(String,String)] = 
		DB.withConnection { implicit connection =>
			SQL("select * from company order by name").as(userParser *).map(c => 					c.id.toString -> c.name)
			}

}

///////////CONTROLLER
val form = Form(
    mapping(
      "id" -> ignored(NotAssigned: Pk[Int]),
      "username" -> nonEmptyText,
      "email" -> email,
      "age" -> number)(User.apply)(User.unapply))

def save = Action { implicit request =>
    form.bindFromRequest.fold(
      errors => BadRequest(views.html.users.add(errors)),
      user => {
        User.save(user)
        Redirect(routes.Users.list).flashing("success" -> "User successfully created!")
      }
	)
  }

def list: List[User] = {
    Ok(views.html.users.list(User.list))
  }

def edit(id: Int) = Action {
    User.load(id).map { user =>
      val bindedForm = form.fill(user)
      Ok(views.html.users.edit(id, bindedForm))
    }.getOrElse(NotFound)
  }

def update(id: Int) = Action { implicit request =>
    User.load(id).map { user =>
      form.bindFromRequest.fold(
        formWithErrors => BadRequest(views.html.users.edit(id, formWithErrors)),
        userWithNewValues => {
          User.update(id, userWithNewValues)
          Redirect(routes.Users.list).flashing("success" -> "User %s successfully 			updated!".format(userWithNewValues.name))
        })
    }.getOrElse(NotFound)
  }

def delete(id: Int) = Action {
    User.delete(id)
    Redirect(routes.Users.list).flashing("success" -> "User successfully deleted!")
  }
