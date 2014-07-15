$ ruby inventory.rb > out.txt
irb> load 'describe.rb'
irb> inv_array = File.open('inv.txt').readlines
old_env - new_env

ARGV[0]
if $0 == __FILE__
	..do something..
end

out = (in < 0) ? 0 : in

carry() if raining?()
arr.pop unless arr.empty?

def test_X
	assert_equal('expected', 'actual')
	assert('value')
	assert_match(/pattern/, actual)
end

#{1+1} metaprogramming
any OBJECT except (nil, false) is true

ARRAYS
======
a = ['one', 'two']
a = []
a = Array.new
a.length OR a.size
a.empty?
a.include?

a.push("y")
a << "y"
a.pop deletes from end
a.delete_at(0)
a.delete("x")
a.shift shift left
a.unshift("x") shift right

a.slice!(0..1) returns slice
a[0..2] inclusive slice
a[0...2] exclusive slice
a.sort
a.each do |ele|
a.collect do |ele| (like map, ret new arr)
a.reject do |ele| (like collect, reject if bool true)
a.reverse

STRING
=======
str.chars
str.downcase
str.split(':')
str.chomp (remove newline)
str.chop (remove last char)
str.sort
str.reverse!
str.uniq
str.include?
str.length
gsub!(pattern, "?" => '.')
eql?
.to_s
.to_i(base)

HASH
======
map = {1 => 'x', 2 => 'y'}
map = Hash.new(0)
map.push(ele)

map.each
map.each_key do |key|
map.each_pair do |key,val|
map.flatten
map.join

CLASS
======
class Movie
	@name
	@@year
	attr_accessor :name, :year

	def initialize
		@name = popcorn
	end
	
	def new_name=(n)
		@name = n
	end
end

class.respond_to?("new")
class.instance_of?(className)
can add any method to an existing class
self (refers to the object language)

REGEX
========
Regexp.new(/...../)
^ starts with
$ ends with
[ ] block of chars
[0-1] range of chars
. any char
* repeat (0+)
+ repeat (1+)

/pattern/.match("a string")
=~ match
!~ don't match
( ) capturing
[ ] $1 match data