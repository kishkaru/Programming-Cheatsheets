import play.api.data._
import play.api.data.Forms._

///create case class for form
case class UserData(name: String, age: Int)

///create form
val userForm = Form(
  mapping(
    "name" -> nonEmptyText,
    "age" -> number(min = 0, max = 100)
  )(UserData.apply)(UserData.unapply)
)

//form data 
constraints
text(minLength, maxLength)
nonEmptyText
number(min,max,strict)
longNumber
date(pattern, timezone)
email
boolean, checked

//custom apply/unapply bindings
{ 
	(username, email, passwords, profile, _) => User(username, passwords._1, email, profile) 
}
{
  user => Some(user.username, user.email, (user.password, ""), user.profile, false)
}

///bind data from request
val userData = userForm.bindFromRequest.get

userForm.bindFromRequest.fold(
  formWithErrors => { BadRequest(views.html.user(formWithErrors)) },
  userData => {
    val newUser = User(userData.name, userData.age)
    val id = User.create(newUser)
    Redirect(routes.Application.home(id))
  }
)

///views
@(userForm: Form[UserData])
@import helper._

@form(action = routes.Application.userPost(), 'class -> "topRight") {
	@inputText(userForm("name"))
	@inputText(
		field = userForm("age"),
		args = '_label -> "What's your age?"
	)
	@select(
		field = userForm("color"), 
		options = options(
		    "" -> "Default",
		    "red" -> "Red",
		    "green" -> "Green",
		    "blue" -> "Blue"
		),
		args = '_label -> "Color", '_default -> "-- Choose a color --",
				'_showConstraints -> false
	)
 	<input type="submit" value="Create"> OR <a href="@routes.Application.list()" 				class="btn">Cancel</a> 
}

//form helpers
inputText
inputPassword
inputDate
inputRadioGroup
select
textarea
checkbox

//helper args
'_label			label for box
'_default		selected for selection box
'_help			displayed under box
'_error			hook for "verifying" in form
'_showConstraints	(un)displays form validations
'placeholder		default value
'size			textbox size


//pre-filled forms
val filledForm = userForm.fill(UserData("Bob", 18))
@inputText(filledForm("name"))

//nested forms
case class AddressData(street: String, city: String)
case class UserAddressData(name: String, address: AddressData)

val userFormNested: Form[UserAddressData] = Form(
  mapping(
    "name" -> text,
    "address" -> mapping(
      "street" -> text,
      "city" -> text
    )(AddressData.apply)(AddressData.unapply)
  )(UserAddressData.apply)(UserAddressData.unapply)
)

@helper.inputText(userFormNested("name"))
@helper.inputText(userFormNested("address.street"))
@helper.inputText(userFormNested("address.city"))

//forms with repeated values
case class UserListData(name: String, emails: List[String])

val userFormRepeated = Form(
  mapping(
    "name" -> text,
    "emails" -> list(email)
  )(UserListData.apply)(UserListData.unapply)
)

@repeat(myForm("emails"), min = 1) { emailField =>
    @inputText(emailField)
}

//forms with optional values
case class UserOptionalData(name: String, email: Option[String])

val userFormOptional = Form(
  mapping(
    "name" -> text,
    "email" -> optional(email)
  )(UserOptionalData.apply)(UserOptionalData.unapply)
)
