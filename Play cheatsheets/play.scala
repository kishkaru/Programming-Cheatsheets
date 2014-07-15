# Routing
GET   /clients/:id          controllers.Clients.show(id: Long)
GET   /clients              controllers.Clients.list(page: Int ?= 1)
GET   /                     controllers.Application.show(page = "home")
GET   /files/*name          controllers.Application.download(name)
GET   /items/$id<[0-9]+>    controllers.Items.show(id: Long)

//Reverse routing
def helloBob = Action { implicit request =>
  Redirect(routes.Application.hello("Bob"))
}

//Action results
Ok("Hello world!")
Ok(<h1>Hello World!</h1>).as(HTML)
Redirect("/user/home")
NotFound(<h1>Page not found</h1>)
Unauthorized("Oops, log-in first")
TODO

#####SESSION#####
//add to session
Ok("Hello World!").withSession(
  session + ("saidHello" -> "yes"))

//read from session
session.get("connected").map { user =>
    Ok("Hello " + user) }

//remove from session
Ok("Theme reset!").withSession(
  session - "theme")

//clear session
Ok("Bye").withNewSession

#####FLASH#####
//add to flash
Redirect("/home").flashing(
    "success" -> "The item has been created")

//read from flash
Ok { flash.get("success").getOrElse("Welcome!") }

//flash in view
@()(implicit flash: Flash)
@flash.get("success").getOrElse("Welcome!") 
@flash.get("success").map { message =>
    <div class="alert-message warning">
        <strong>Done!</strong> @message
    </div>
}

@if(flash.contains("success")) { @flash.get("success") }
#{if flash.error}
    <p style="color:#c00">
        ${flash.error}
    </p>
#{/if}

#####CACHE#####
//add to cache
Cache.set("age", 23)

//read from cache
val theAge = Cache.get("age")
val theAge: Option[Int] = Cache.getAs[Int]("age")

//get and/or set
val user: User = Cache.getOrElse[User]("item.key") {
  User.findById(connectedUser)
}

//remove from cache
Cache.remove("age")

//cached pages
def index = Cached("homePage") {
  Action { Ok("Hello world") }
}

####GLOBAL OBJ####
import play.api._
object Global extends GlobalSettings {

  override def onStart(app: Application) {
    Logger.info("Application has started")
  }

  override def onStop(app: Application) {
    Logger.info("Application shutdown...")
  }
}
