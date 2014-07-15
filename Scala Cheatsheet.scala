//variable
var x: Double = 5
private var x = 5

//constant
val y = 6

//default
_		//0, false, null, ()

//datastructures
var (x,y,z) = (1,2,3)	//tuple3
var xs = List(1,2,3)	//list(immutable)
1 :: List(2,3)	//cons
1 to 5	//inclusive range
1 until 5	//exclusive range

//iteration
for (i <- 1 to 5) { println(i) }

//conditionals
val UppercaseVal = 42
Some(3) match {
	case Some(UppercaseVal) => println("42")
	case _ => println("Not 42")
} //prints 'not 42'

//arguments
def f(x: Int) { println(x*x) }	//returns Unit

//return values
def f(x: Int): Int = { (x*x) }	//must return Int

//anonymous function
() => println("time flies like an arrow...") 
(x: Int) => x*x

(1 to 5).map(_*2)
(1 to 5).map(2*)
(1 to 5).map( x => x*x )	//name arg to use twice
(1 to 5).map { val x=_*2; println(x); x }  //blocks return last statement

//callbacks
callback: () => Unit //callback function

//class definition
class Complex(real: Double, imaginary: Double) {
  def re = real
  def im = imaginary
}

//overriding methods in superclass
override def toString() = "" + re + (if (im < 0) "" else "+") + im + "i"

//checks
classOf[String]	
x.isInstanceOf[String]		//instanceOf? T/F
x.asInstanceOf[String]		//casting
assert(x > 0, "positive please")

//importing
import scala.collection._	
import scala.collection.{Vector, Sequence}
import scala.collection.{Vector => Vec28}  //rename
package pkg

//main method
use singleton Object vs defining via Static
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, world!")
  }
}

//generic classes
class Reference[T] {
  private var contents: T = _
  def set(value: T) { contents = value }
  def get: T = contents
}

Any
	AnyVal (any value)
		scala.Unit
		scala.Int
	AnyRef (any object)
		scala.Null
		scala.Nothing		
		scala.List
		scala.Option
		scala.String

