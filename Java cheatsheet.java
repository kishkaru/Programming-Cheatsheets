int[] arr = new int[10]
int[] arr = {1,2,3}
int[][] matrix = new int[10][10]
int[][] matrix = {{1,2,3}, {4,5,6}}

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
public class final Car {
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
    
    static { } //static/class initializer (once, ever)
    { } //instance initializer (once per instance)
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
m.matches() [ret boolean]
m.reset()
while (m.find()) {
    list.add(m.group());
    count++;
}

FUNCTIONS
=========
// in: Obj
Consumer<String> c1 = s -> s.toUpper();
c1.accept("foo");

// out: Obj
Supplier<Integer> randomSupplier = () -> random.nextInt();
supplier.get();

// in: Obj, out: boolean
Predicate<Employee> cond = employee -> employee.getAge() > 30;
boolean b = cond.test(emp);

// in: Obj, out: Obj
Function<Employee, String> getLast = (Employee emp) -> {
	return employee.lastName;
}
String last = getLast.apply(emp);
Function chainedFunction = getLast.andThen(upperCase);

STREAMS
======
Stream<Integer> intStream = Stream.of(1,2,3);
List<Integer> list = intStream.map(i -> i * 2).collect(Collectors.toList());

list.stream()
        .map(someFunction)
        .filter(name -> name.startsWith("A"))
        .sorted()
        .count();

departments.stream()
	.collect(ArrayList::new, ArrayList.add, ArrayList.addAll);

numbers.stream()
     .map(i -> i.toString())
     .collect(Collectors.joining(", "));

THREADS
======
new Thread() {
	public void run() {
		sout();
	}
}.start()

Thread thread = new Thread(() -> sout());
thread.start();
thread.join();

LOCKS
======
Lock lock = new ReentrantLock();
lock.lock();
lock.unlock();

public synchronized void increment() { }
synchronized(this) { }

TESTING
=======
@Before //@After
public void setup() { // runs before each test case }
public void tearDown() { // run after each test case }

@BeforeClass //@AfterClass
public static void beforeClass() { // runs before test suite }

@Test(expected = IllegalArgumentException.class) {}
