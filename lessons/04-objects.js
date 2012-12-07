/*
 *
 * Let's quickly review what we should be fairly comfortable with so far:
 *
 * 1. Reading basic pieces of code and being able to understand and explain
 * what they do.
 * 2. Writting functions
 * 3. Using conditional and loop structures
 * 4. Manipulating variables
 * 5. Using comparision operators
 *
 * If you are not yet at least somewhat comfortable with these skills, I
 * strongly suggest you re-read the previous lessons and attempt to complete
 * the practice questions at the bottom of the page.
 *
 * Now, on with the lesson.
 *
 * There are several different kinds of programming languages which have
 * different strenghts and weaknesses. The three main types of programming
 * languages are functional, procedural and object oriented languages.
 *
 * Functional programming languages can be seen as a series of mathematical
 * functions which are never allowed to alter state, only create new state.
 * In general, functional programming attempts to avoid keeping state and
 * changing state.
 *
 * A good example of a functional language is Haskell.
 *
 * Procedural programming languages can be viewed as a series of functions
 * which perform some sequences of computational steps. These functiona can,
 * either implicitly or explicitly change state both locally or  globally
 * in the program.
 *
 * A good example of a procedural langauge is C.
 *
 * Object oriented programming languages can be viewed as the interaction
 * between different objects. These objects encapsulate certain functionality.
 * Changes in the state of a program occur as changes in the state of these
 * objects. Objects can change state explicitly or through the use
 * of methods, which act on objects. Methods here are analogous to functions,
 * and they can, for this course, be used interchangeably.
 *
 * Javascript is an object oriented programming language (OOP). This means that
 * on a fundamental level, javascript is composed of different objects
 * interacting with each other. In fact, almost everything in javascript is an
 * object.
 *
 * The following are all objects:
 *
 * var a = "Hey there",
 *     b = 123,
 *     c = true;
 *
 * More precisely, an object is data with certain properties and certain
 * methods, which interact with these properties.
 *
 * In javascript, an object is represented as a key-value map. As the name
 * suggests, key-value maps, or just maps, associate certain keys or properties,
 * with certain values. These values can be any other object; therefore,
 * numbers, booleans, strings and functions are all permissable values.
 *
 * Explicitly, objects (key-value maps) can be created using the syntax:
 *
 * var obj = {
 *     key: value,
 *     key: value,
 *     ...
 *     key: value
 * };
 *
 * For example, the following object contains the names of the students in
 * this class, and their gender (represented as boolean values).
 *
 * var people = {
 *     "Alison": false,
 *     "Elias": true,
 *     "Kasper": true,
 *     "Siddharth": true
 * };
 *
 * The keys of an object can also map to functions. In javascript
 * functions are first-class objects. This means that they can be passed around
 * as parameters to methods, returned from a function and stored in data
 * structures.
 *
 * For example, the following object contains a function which returns a
 * boolean value indicating whether the given name corresponds to a boy or a
 * girl:
 *
 * var people = {
 *     "Alison": false,
 *     "Elias": true,
 *     "Kasper": true,
 *     "Siddharth": true,
 *     gender: function(name){
 *         // Code here
 *     }
 * }
 *
 * The values stored inside a key-value map can be accessed in two ways: using
 * the dot (.) operator, and using the key directly.
 *
 * The dot (.) operator is used like this:
 *
 * var alison = people.Alison;
 * var gender = people.gender;
 *
 * Here the variable alison would contain the value at the key "Alison", which
 * is false. Therefore alison === false.
 *
 * Notice that in the next case, gender contains a function, but it isn't being
 * called. To call the function the gender variable is holding, we would need
 * to do:
 *
 * var kaspersGender = gender("Kasper");
 *
 * Let's take a look at good 'ol console.log again. With our new found knowledge
 * of objects, we can infer that console is some global object and log is
 * a key in console which maps to a function. This function, as we know, prints
 * the value of any parameters we pass it.
 *
 * In fact, we can imagine that before our code is executed an object such as
 * the one described bellow is created, and we are simply calling the log
 * method of this object.
 *
 * var console = {
 *     "...": ...,
 *     "...": ...,
 *     log: function(...){
 *
 *     },
 *     "...": ...
 * }
 *
 * The alternate way to access the values stored in a key value map is through
 * the use of the key and bracket notation.
 *
 * For example, we can also call the console.log function this way:
 *
 * console["log"]("Print this");
 *
 * The console["log"] part returns the function associated with the key "log"
 * and the parentheses execute the function with the parameter "Print this".
 *
 * Note that the data values in key-value maps and objects do not
 * have to be static. In fact, you can add, remove and modify the keys and
 * values in an object using the dot (.) operator or the key bracket notation,
 * and the special key word "delete".
 *
 * By accessing a property, it is automatically created if it does not already
 * exist. Therefore, to create a new property for an object simply pretend
 * the key already exists. For example:
 *
 * var empty = {};
 * empty.property = "awesome";
 * // empty.["property"] = "awesome";
 *
 * Modifying properties can be done by setting the value of the property as
 * you would a variable. For example:
 *
 * empty.property = "cool";
 * // empty["property"] = "cool";
 *
 * Finaly, removing a property or a key can be done by placing the key word
 * "delete" before accessing the property you wish to delete. This will not
 * remove the underlying object, but rather the key linking too that object.
 * For example:
 *
 * delete empty.property;
 *
 * So far, we've only been creating objects literally. That is, we've
 * been creating objects as key-value maps. Now there is nothing wrong
 * with this, however, when we start writing longer pieces of code, we're going
 * to want to initialize objects with certain properties and certain methods
 * upfront. This makes things much faster and easier to manage.
 *
 * To do this, we use prototypes.
 *
 * Prototypes are objects, normally functions, which are used to create
 * objects with certain properties and certain methods, such that all objects
 * created by that prototype share certain characteristics.
 *
 * To learn about prototypes, it's best just to jump into the code.
 *
 */

var Dog = function(owner, breed){
    this.owner = owner;
    this.breed = breed;
}

Dog.prototype.description = function(){
    return "This " + this.breed + " is owned by " + this.owner;
}

var holly = new Dog("Siddharth", "Labrador");

console.log(holly.description());

/*
 * Alright, what's going on here?
 *
 * var Dog = function(owner, breed){
 *    this.owner = owner;
 *    this.breed = breed;
 * }
 *
 * Prototypes are defined identically to normal functions. However, they make
 * heavy use of the "this" keyword".
 *
 * The "this" keyword is used to refer to the object currently executing the
 * method. In the case above, "this" refers to the object the prototype function
 * just created.
 *
 * Therefore, the lines:
 *
 * this.owner = owner;
 * this.breed = breed;
 *
 * Are creating the properties "owner" and "breed" for this object, and setting
 * their values to the values of the variables owner and breed, respectively.
 *
 * The next few lines define a method of all Dog objects, called "description",
 * which returns a string describing the dog.
 *
 * Dog.prototype.description = function(){
 *    return "This " + this.breed + " is owned by " + this.owner;
 * }
 *
 * Notice the use of Dog.prototype.decription. The prototype keyword is used
 * here because we want to define this function to exist only for the objects
 * the prototype object creates, not the prototype itself. Remember, the
 * prototype function is itself an object, which can have associated methods
 * and values.
 *
 * If we were to do this instead:
 *
 * Dog.description = function(){
 *    // This is wrong
 * }
 *
 * We would be defining a function only for the Dog object, not the objects it
 * creates. Furthermore, since the "this" value of the Dog prototype object
 * does not contain the keys "breed" or "owner", we would get invalid results.
 *
 * var holly = new Dog("Siddharth", "Labrador");
 *
 * console.log(holly.description());
 *
 * Finaly, we actually create a Dog object, and store it in the variable holly.
 *
 * Notice the use of the keyword "new" before the calling of the Dog function.
 * This tells the compiler to treat the Dog function as a prototype, and attach
 * all of the methods you have created for it's prototypes to the new object.
 *
 * The final line simply executes the description function we created for
 * each Dog object, and prints the string it returns.
 *
 * Uptil this point, all of the data types we have been introduced too have
 * been presented separate. However, they are really just different
 * objects created using special syntax provided by the compiler.
 *
 * For example, we can create all of our basic "data types" like this:
 *
 * var str  = new String("hey");
 * var bool = new Boolean(true);
 * var num  = new Number(10);
 * var obj  = new Object();
 *
 * As well as like this:
 *
 * var str  = "hey";
 * var bool = true;
 * var num  = 10;
 * var obj  = {};
 *
 * In summary:
 *
 * 1. Javascript is an object oriented programming language.
 * 2. An object is data with properties and methods, represented as a key-value
 * map in javascript.
 * 2. Properties and methods can be set, retrieved, altered and deleted.
 * 3. The dot (.) operator or the key-bracket notation are used to create,
 * access, and manipulate properties/methods.
 * 4. The "delete" keyword is used to remove properties/methods.
 * 5. Objects can be created literally or using prototypes.
 * 6. A prototype is an object which creates more objects with specific
 * properties and specific methods.
 * 7. The "this" keyword is used to refer to the object executing the method.
 * 8. The "prototype" keyword is used to refer to the properties and methods
 * the prototype object wants to give give the objects it creates.
 * 9. The "new" keyword invokes a prototype function, telling the compiler to
 * treat the prototype object as a prototype, and actually create a new object.
 * 9. Data types are just different kinds of objects.
 *
 * At this point, you may be questioning whether OOP is actually worth all of
 * the effort. Why create define prototypes, and have properties and methods
 * in the first place?
 *
 * The answer is that these constructions allow us to write code that is very
 * modular. This means that functionality in our code is sperated into the
 * functionality of different objects, which we can use independantly and
 * interchangeably, and maintain much more easily.
 *
 * Furthermore, now that you understand OOP principles and objects in
 * javascript, we can begin using some of the builtin node.js libraries to
 * perform more advanced functions, like pull data from the internet, get
 * user input and perform I/O tasks, such as writing files or creating
 * folders.
 *
 * Until the next lesson, here are a few problems to help you improve your
 * programming prowess.
 *
 * 1. Create a prototype function which creates objects representing complex
 * numbers. Create properties to hold the varies information they contain,
 * and methods to add, subtract, multiply and divide complex number by one
 * another. Your prototype should begin like this:
 *
 * var Complex = function(real, complex){
 *     // Code here
 * }
 *
 * Complex.prototype.add = function(c){
 *     // Code here
 * }
 *
 * Complex.prototype.sub = function(c){
 *     // Code here
 * }
 *
 * Complex.prototype.mult = function(c){
 *     // Code here
 * }
 *
 * Complex.prototype.div = function(c){
 *     // Code here
 * }
 *
 * The code should work as follows:
 *
 * var z = new Complex(1, 1);
 * var w = new Complex(2, -3);
 *
 * var x = z.mult(w);
 *
 * console.log(x.real); // 5
 * console.log(x.complex); // -1
 *
 * Where x.real and x.complex are the values of the real and complex components
 * of the number.
 *
 */
