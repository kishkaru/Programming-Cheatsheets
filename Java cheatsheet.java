int[] arr = new int[10]
int[] arr = {1,2,3}

LIST
======
List<T> l = new ArrayList<>()
l.size()
l.isEmpty()
l.contains(e)
l.indexOf(e)
Collections.sort(l)
Collections.reverse(l)
Collections.min(l)
Collections.max(l, Comparator)
Collections.swap(l, e1, e2)
Collections.frequency(l, e)
l.stream().distinct().count()
String.join("", l)

l.add(e)
l.remove(e)
l.remove(i)
l.get(i)
l.set(i, e)
l.subList(start, end)

for(Element e : l) { }
l.forEach(e -> { })

STRING
=======
str.substring(start, end) [exclusive slice]
str.toLowerCase()
str.length()
str.charAt(i)
str.contains(str)
str.indexOf(str)
Arrays.asList(str.split(":"))

str2 = new StringBuilder(str)
str2.append(str)
str2.insert(0, str) [prepend]
str2.reverse().toString()

MAP
======
Map<T, T> map = new HashMap<>()
map.put(k,v)
map.containsKey(k)
map.containsValue(v)
map.get(k)
map.keySet()
map.values()
map.remove(k)
map.replace(k, newval)

for(Map.Entry e : map.entrySet()) { }
map.forEach((key, val) -> { })

SET
=====
Set<T> s = new HashSet<>()
s = new HashSet<>(l)
s.add(e)
s.contains(e)
s.remove(e)
s.size()
s.isEmpty()
for(Element e : l) { }
l.forEach(e -> { })

CLASS
======
public class Car {
    private int gear;
    private String secret;
    private static classVar;
    static final double PI = 3.14159;
    
    public Car(gear) { 
        this.gear = gear;
        this.secret = "Secret";
    }
    
    public static void classMethod() { } //no access to instance vars/meths
    protected final void finalMethod() { } //subclass cannot override
}

GENERICS
========
public class Generic<T extends ArrayList & List> {
    public <U> void test(U u) { }
    public <T extends Comparable<T>> int countGrt(T[] arr, T elem) { }
    public void print(Collection<?> c) { }
}

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

str.matches(str2)
str.replaceAll("x", "y")

Pattern p = Pattern.compile("<h1>")
Matcher m = p.matcher(str)
m.matches()
m.reset()

FUNCTIONS
=========


STREAMS
======


THREADS
======


LOCKS
======
