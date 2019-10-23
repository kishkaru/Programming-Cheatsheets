TYPES
======
True
False
None

type(var)
str(var) # stringify

7 // 4 # floor division, truncate
int(var)
float(var)
abs(integer)
round(floating, precision)
x ** y # powers
pow(x, y) # powers

STRING
======
s[i] # single char
s[start:end:step] # exclusive slice
s[::-1] # iterate backwards

s == s2
len(s)
s.lower()
s.islower()
s.capitalize() # only first word
s.count(e)
s.find(e)
s.isdigit()
s.isalpha()
s.endswith(e)
s.split(":") # returns list
s.partition(" ") # splits at first instance of sep (start, sep, end)
for char in s:

print("foo:" , foo)
"hello {}".format("world")
"hello {0}".format("world")
"hello {w}".format(w = "world")
"result {r:1.2f}".format(r=0.234)

f"{var_name}"
f"{var_name:{padding}.{precision}}"

LIST
======
l = ['3',45,'frog']
l = list(1, 2)
len(l)
not l # empty sequences are false (check if empty)
e in l
l.index(e)
l.count(e)
l.remove(e)
l.sort() # in place
sorted(l) # returns new list
l.reverse()
min(l)
max(l)
sum(l)
"".join(l) # returns string

l[0] = 0
l.append(e)
l.insert(i, e)
l.extend(l2)
l.pop(i)
l[start:end:step] # exclusive slice
del l[0:5]

l + l
l = [e for e in iterable if cond]
l = [e if cond else e2 for e in iterable]
l = [e1*e2 for e in iterable1 for e2 in iterable2]

DICTIONARY
======
d = {"key": "val"}
d[k] = v
k in d
del d[k]

d.keys()
d.values()
d.items()
for k,v in d.items():
for v,k in enumerate(d):
d = {k:v for v,k in enumerate(l)}

TUPLES  #immutable
=======
t = (1,2,3)
t[0]
e in t
t.count(e)
t.index(e)
for (a,b) in t:
x,y,z = (1,2,3)
t1 + t2

SETS
=======
s = set(l)
s = set("foo") # {'f', 'o'}
s.add(e)
e in s
s.remove(e)
s.clear()

s1 - s2 # difference
s1 | s2 # union
s1 & s2 # intersection
s1 ^ s2 # opposite of intersection
s1 < s2 # subset
s2 > s2 # superset

CONDITIONALS
============
True and False (True & False)
False or True (False | True)
not True

if cond:
elif cond2:
else:

LOOPS
=======
range(start, stop, step) # generates a stream [exclusive stop]
list(range(3)) # [0,1,2]

for e in iterable:
  pass #noop
  continue
  break

for (i, e) in enumerate(iterable, start=n):
for (a,b) in zip(l1, l2):

while cond:
else: # execute when while is not true

ERROR HANDLING
==========
import sys

try:
except SomeException as e:
  print(sys.exc_info())
  raise RuntimeError("fail") from e
else:
  # runs if not excepted
finally:

MODULES
========
import math
from module import func
from MainPackage.SubPackage import sub_script

# Main Function, execute if python file called directly
if __name__ == "__main__":
  pass

FUNCTIONS
=========
def func_name(name = "default"):
  """
  explains func
  """
  global var # change the outer variable
  return name

def args_func(*args, **kwargs):
  # *args = tuple of args
  # **kwargs = dict of args

args_func(0,1, fruit='apple', veggie=5)

lambda (a,b): a if (a > b) else b

map(func, iterable) # func must return val
list( map(lambda x,y: x+y, list1, list2) )
filter(func, interable) # func must return T/F
reduce(lambda x,y: x+y, list1) # x = acc, y = curr val

# function returns a function
def returning_func():
  def inner_func():
    pass

  return inner_func

# function takes a function as arg
def executing_func(some_func):
  some_func()

executing_func(returning_func())

# decorators, externally adds extra functionality to func
from functools import wraps

def add_wrapping(func):
  @wraps(func)
  def wrapped_function():
    return "Wrapped: {}".format(func())
  return wrapped_function

@add_wrapping
def func_needs_decorator():
  return "Needs dec"

print(func_needs_decorator())

GENERATORS (lazy eval)
==========
def generator_func(n):
  for x in range(n)
    yield x

for i in generator_func(5):
  print(i)

next(generator_func(5))

s_iter = iter(string)
next(s_iter())

# Generator expression, lazy eval
g = (x for x in range(5))
next(g)

CLASSES
==========
class ClassName(SuperClass):
  class_variable = 'val'
  __private_var = 0

  def __init__(self, var1=5):
    super().__init__()
    self.var1 = var1
    self.__private_var = "foo"

  def some_method(self):
    return self.var1

  # class of this object instance is implicitly passed as the first argument 
  @classmethod
  def class_methold(this_class, x):
    print(len(this_class) == x)

  # neither self nor the class is implicitly passed as the first argument
  @staticmethod
  def static_method(x):
    print(x)
    raise NotImplementedError("abstract method")

  # stingify object
  def __str__(self):
    return f"{self.var1} {self.__private_var}"

instance = ClassName(var1)
instance.var1
instance.some_method()
instance.class_variable
ClassName.class_variable
del instance

REGEX
==========
import re
pattern = r"(?P<var1>foo)"
m = re.search(pattern, text)
m.start() # starting index of match
m.group() # entire match
m.group(1) # first matching subgroup
m.group("var1") # access via group name
m.groups() # all matching subgroups in a tuple

re.sub(pattern, replacement, string)

COLLECTIONS
============
from collections import Counter
c = Counter(l)
Counter(String)
Counter(String.split())
c.most_common(n) # highest counts
c.most_common()[:-n-1:-1] # lowest counts
sum(c.values()) # total counts sum

d = dict(c) # dict of e:count
l = list(c) # list of e (unsorted)
l = list(c.items()) # list of (e, count) (unsorted)
s = set(c.items()) # set of (e, count) (unsorted)

from collections import defaultdict
d = defaultdict(lambda: None) # define default value
d['foo'] # returns None

from collections import Ordereddict
d = OrderedDict() # maintains order of insertion keys

from collections import namedtuple
T = namedtuple('TupleName', 'attr1 attr2')
t = T(attr1="foo", attr2="bar")
t.attr1
t[1]

from collections import deque
dq = deque()
dq.append(e)
dq.appendleft(e) # head
dq.pop()
dq.popleft() # head
dq[-1] 
dq[0] # head

# heap / priority queue
import heapq
l = []
heapq.heapify(l) # convert list to heap
heapq.heappush(l, e)
heapq[0] # peek
heapq.heappop(l) # smallest ele

import timeit
timeit.timeit('function', number = iterations)

MULTIPROCESSING
===========
from multiprocessing import Process, Pool

# spawn 8 processes
for i in range(8):
  p = Process(target=func, args=(var1, var2))
  p.start()
  p.join()

# pool with 8 processes
with Pool(8) as p:
  data = p.map(func, range(1000))
print(data)

FILE IO
==========
file = open('filename.txt')
file.close()
file.read()
file.seek(0)
file.readlines() # list of lines
with open('file.txt', mode='a+') as file:
  file.write('foo')

LOGGING
========
import logging

logging.basicConfig(level=logging.INFO)
logging.info("foo")

