ARRAYS
======
a = ['one', 'two']
a = []
a = Array.new(num_ele, inital_value)

a.size
a.empty?
a.include?(e)
a.index(e)
a.uniq
a.sort
a.reverse
a.join(delimiter) (ret string concat of elems)

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
a.each_index do |index|
a.each_with_index do |ele, index|
a.each_with_object(obj) do |ele, obj| (ret final obj)

a.map do |ele| (ret new arr)
a.select { |ele| ele.is_a? Symbol } (keep if bool true, ret new arr)
a.reject { |ele| ele.is_a? Symbol } 

STRING
=======
str[0..1]
str.downcase
str.split(':')
str.reverse!
str.size
str.include?(str)
str.index(str)
str.chomp (remove newline)
str.chop (remove last char)

str.chars
str.chars.uniq
str.chars.sort
gsub(/pattern/, {'?' => '.'})
.to_s
.to_i(base)

HASH
======
map = {1 => 'x', 2 => 'y'}
map = Hash.new(initial_value)
map[k] = v
map.has_key?(k)
map.has_value?(v)
map.key(v)
map.keys
map.delete(k)
map.invert
map.flatten (ret arr)

map.each_key do |key|
map.each_pair do |key,val|
map.select { |k,v| v > 0 } (keep if bool true, ret new hash)
map.to_a (ret nested arr)
map.sort_by { |k,v| v } (ret nested arr)

SET
=====
set = Set.new [1, 2]
set.add(e)
set.include?(e)
set.delete(e)
set.size
set.each do |e|

set.subset?(set2)
set.subtract(set2) (-)
set.intersection(set2) (&)
set.merge(set2) (|)

CLASS
======
module Entertainment
  require 'date'
  
  class Movie
    include Math # bring in module as instance meths
    extend Math # bring in module as class meths
    
    # vars private by default
    @@total_movies = 0 # class var (shared with super/subclasses)
    @last_added = nil # class instance var
    attr_accessor :name, :year # instance var
  
    def initialize(name, year)
      @name = name
      @year = year
      self.class.last_added = name
      @@total_movies += 1
    end
  	
    def self.last_added
      @last_added
    end
  
    def self.last_added=(name)
      @last_added = name
    end
  
    def self.total_movies
      @@total_movies
    end
    
    private 
    def private_method; end
  end
end

class.respond_to?("new")
class.is_a?(className)
class.instance_of?(className) # does not incl. subclasses

REGEX
========
^ starts with
$ ends with
. any char
* repeat (0+)
+ repeat (1+)
? (0 or 1 time)
[] or
( ) capturing

Regexp.new(/...../)
/pattern/.match("a string") (ret matchdata)
matchdata[n]
pattern =~ str (index of first match, $~ matchdata)
pattern !~ str (don't match)

PROCS, LAMBDAS, BLOCKS
======
l = lambda { puts "hello" }
l.call

p = Proc.new do |x|
  puts x*2
end
p.call(5)

def foo(x)
  yield(x)
end

foo(5) &p

out = (in < 0) ? 0 : in
carry() if raining?()
arr.pop unless arr.empty?

String interpolation
"#{1+1}" #2 
any OBJECT except (nil, false) is true

=begin
this is a
multi line comment
=end

$ ruby inventory.rb > out.txt
irb> load 'describe.rb'
irb> inv_array = File.open('inv.txt').readlines
old_env - new_env

ARGV[0]
if $0 == __FILE__
	..do something..
end

def test_X
  assert_equal('expected', 'actual')
  assert('value')
  assert_match(/pattern/, actual)
end
