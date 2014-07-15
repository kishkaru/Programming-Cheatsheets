STRING
======
str == string
str.upper()
str.lower()
str.index[0:5]
str + "another"
str(5)
str.count('e')
len('help')

ARRAYS
======
list = ['3',45,'frog']
list[2] ==> 'frog'
list[start:stop]
append(e)
insert(i, e)
remove(e)
pop(i)
del list[0:5]
index(e)
e in list
count(e)
sort()
reverse()

TUPLES  #immutable
=======
tuple = (6,7,'zz')
tuple[0] ===> 6
min(t)
max(t)
len(t)
e in t
t1 + t2
x,y,z = (1,2,3)

SETS
=======
set(list)
add(e)
e in s
s1 - s2
s1 & s2
s1 | s2

HASH
======
dict = { 42: 'forty two', 'naomi': 'person' }
dict[42] = 'bleh'
dict['forty two']
del dic[42]
len(d)
k in d
d.keys()
d.values()
d.items()

CONDITIONALS
============
if cond:
elif cond2:
else:

==
>=
& / and
| / or
not

LOOPS
=======
for x in [1,2]:
	print x
	
for x in range(2,8):
	list.append(x**2)
list = [x**2 for x in range(2,8) if x != 5]
dict = {x: x**2 for x in (2, 4, 6)}	

list = [1,2,3]
for x in range(len(list)):
	print list[i]

while x < 4:
	x++

METHODS
=========

def bar(fun):
add = lambda(x,y):
	return x+y

filter(funct, seq)
	filter(lambda x: return x>0, list)
map(function, seq)	
	map(lambda k: return dict[k], kvlist)
reduce(funct, seq)
	reduce(lambda x, y: return x+y, list)

# Main Function
if __name__ == '__main__':    
	
global varName
from module import name

CLASSES
==========
class Fruit(Food):

	name = "apple"
	static_var varr = 0
	
	def __init__(self, name)
		self.name = name
	def getName(self):
        return self.name

a_fruit = Fruit("apple")	
isinstance(a_fruit, Fruit)
issubclass(a_fruit, Food)
pa_fruit.getName()	
		