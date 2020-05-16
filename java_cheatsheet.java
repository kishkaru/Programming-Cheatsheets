int[] arr = new int[10]
int[] arr = {1,2,3}
int[][] matrix = new int[10][10]
int[][] matrix = {{1,2,3}, {4,5,6}}

Arrays.sort(arr)
Arrays.asList(arr) [List for Obj[]]
IntStream.of(arr).boxed().collect(Collectors.toList()) [List for prim]
Arrays.toString(arr) [print prim/Obj arr]

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
Collections.swap(l, i1, i2)
Collections.frequency(l, e)
l.stream().distinct().count()
l.toArray(new Object[l.size()]) //convert to Obj[]
l.toArray(String[]::new) //convert to Obj[] (jdk11)
String.join("", l)

l.add(e)
l.add(i, e) [prepend]
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
str.toCharArray()
str.chars().forEach(c -> {(char) c})
str.chars().mapToObj(c -> (char) c).collect(Collectors.toList())
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
map.replace(k, newval) //put if key already exists

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

set.containsAll(set2) [subset s2]
set.removeAll(set2) (-)
set.retainAll(set2) (&)
set.addAll(set2) (|)
	
CLASS
======
public class final Car {
  private int gear;
  private static classVar;
  static final double PI = 3.14159;
    
  public Car(gear) { 
      this.gear = gear;
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
  public void print(Collection<?> c) { } // collection of objects or subclass
  
  // instance or subclass of A. Cannot insert into list
  public void process(List<? extends A> list) { }
  // instance or superclass of A. Cannot read directly from list (must cast)
  public void process(List<? super A> list) { }
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
Consumer<String> c1 = (s) -> s.toUpper();
c1.accept("foo");

// out: Obj
Supplier<Integer> randomSupplier = () -> random.nextInt();
supplier.get();

// in: Obj, out: boolean
Predicate<Employee> cond = employee -> employee.getAge() > 30;
boolean b = cond.test(emp);

// in: Obj, out: Obj
Function<Employee, String> getLast = (Employee emp) -> {
	return employee.lastName();
}
// via method reference
Function<Employee, String> getLast = Employee::lastName;
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
// thread subclassing
Thread t = new Thread("ThreadName") {
	public void run() {
		sout();
	}
}

// runnable interface
Runnable r = new Runnable() {
  public void run() {
    sout();
  }
}
Thread t = new Thread(r, "ThreadName");
t = new Thread(() -> sout());

t.getName();
t.start();
t.join();

Thread.currentThread();
Thread.sleep(ms);

// executor service
ExecutorService es = Executors.newSingleThreadExecutor();
es = Executors.newFixedThreadPool(MAX_THREADS);
es.execute( () -> "hello");

Future future = es.submit( () -> return "hello");
Object o = future.get(5, TimeUnit.SECONDS);
es.shutdown();

LOCKS
======
Lock lock = new ReentrantLock();
lock.lock();
lock.unlock();

// guarentees visibility of writes to other threads
// all writes to variable will be written to main memory immediately
// all reads of variable will be read from main memory
volatile int counter = 0;

public synchronized void add(int value) { }
synchronized(this) { } // for instance method
synchronized(MyClass.class) { } // for static method

TESTING
=======
@Before //@After
public void setup() { // runs before each test case }
public void tearDown() { // run after each test case }

@BeforeClass //@AfterClass
public static void beforeClass() { // runs before test suite }

@Ignore("not ready yet")
@Test(expected = IllegalArgumentException.class) {}

NETWORKING
==========
HttpClient client = HttpClient.newHttpClient();

HttpRequest getRequest = HttpRequest.newBuilder()
  .uri(URI.create("http://www.example.com/"))
  .build();
HttpRequest postRequest = HttpRequest.newBuilder()
  .uri(URI.create("https://postman-echo.com/post"))
  .header("Content-Type", "application/json")
  .POST(BodyPublishers.ofString("{ \"foo\": \"bar\"}"))
  .build();

// sync
HttpResponse<String> response = client.send(getRequest, BodyHandlers.ofString());
response.statusCode();
response.headers();
response.body();

// async
CompletableFuture<HttpResponse<String>> future = client.sendAsync(postRequest, BodyHandlers.ofString());
future.thenAccept(response -> { });

JSON
=====
Gson gson = new Gson();
JsonObject obj = gson.fromJson(jsonString, JsonObject.class);
obj.get("f1").getAsString();
obj.getAsJsonObject("f2");

String jsonString = gson.toJson(obj);

SQL
=====
String url = "jdbc:sqlite::memory:";
String url = "jdbc:sqlite:/home/kishan/music.db";
Connection connection = DriverManager.getConnection(url);

Statement statement = connection.createStatement();
statement.execute("CREATE TABLE table_name");
ResultSet result = statement.getResultSet();

// query
ResultSet result = statement.executeQuery("SELECT * FROM table_name");
while (result.next())
  result.getInt("_id");
  result.getString("name");
  result.getInt(1); // column #

// update
String sql = "UPDATE table_name SET name = 'foo' WHERE name = 'bar'";
int rowsAffected = statement.executeUpdate(sql);

// batch
statement.addBatch("DELETE FROM table_name WHERE var='val'");
int[] result = statement.executeBatch();

// prepared
String sql = "SELECT * FROM table_name WHERE name = ? AND _id = ?";
PreparedStatement select = connection.prepareStatement(sql);
select.setString(1, "foo");
select.setInt(2, 2);

result.close();
statement.close();
connection.close();

// atomic transaction
try {
  connection.setAutoCommit(false);
  // execute statements
  connection.commit();
} catch(Exception e) {
  connection.rollback();
}
