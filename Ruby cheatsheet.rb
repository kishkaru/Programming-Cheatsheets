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

=begin
this is a
multi line comment
=end

ARRAYS
======
a = ['one', 'two']
a = []
a = Array.new(num_ele, inital_value)
a.size
a.empty?
a.include?
a.index(e)
a.sort
a.reverse
a.join (ret string)

a.push("y") == a << "y"
a.pop (deletes from end)
a.delete_at(0)
a.delete("x")
a.shift (shifts left)
a.unshift("x") (shifts right)

a[0..2] inclusive slice
a[0...2] exclusive slice
(0...2).to_a == [*(0..2)]

a.each do |ele|
a.each_index do |ele|
a.each_with_index do |ele, index|
a.map do |ele| (ret new arr)
a.reject do |ele| (like map, reject if bool true)

STRING
=======
str[0..1]
str.downcase
str.split(':')
str.reverse!
str.size
str.include?
str.index(e)
str.chomp (remove newline)
str.chop (remove last char)
str.chars
str.chars.uniq
str.chars.sort
gsub!(pattern, "?" => '.')
eql?
.to_s
.to_i(base)

HASH
======
map = {1 => 'x', 2 => 'y'}
map = Hash.new(initial_value)
map[ele] == map.push(ele)

map.each
map.each_key do |key|
map.each_pair do |key,val|
map.flatten
map.join
map.select { |k,v| v > 0 } (ret new hash)
map.sort_by { |k,v| v }

SET
=====
set = Set.new
set = Set.new [1, 2]
set.add(e)
set.delete(e)
set.size
set.include?
set.each

set.subset?(set2)
set.subtract(set2) (-)
set.intersection(set2) (&)
set.merge(set2) (|)

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
	
	private def private_method
  end
end

class.respond_to?("new")
class.instance_of?(className)
can add any method to an existing class
self (refers to the object language)

REGEX
========
^ starts with
$ ends with
. any char
* repeat (0+)
+ repeat (1+)
? (0 or 1 time)

/pattern/.match("a string")
Regexp.new(/...../)
pattern =~ str (match)
pattern !~ str (don't match)
( ) capturing
[ ] $1 match data
