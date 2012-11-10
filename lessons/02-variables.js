/*
 * Let's quickly recap what we learned last lesson:
 *
 * 1. A program is a sequence of statements telling a computer what to do.
 * 2. Programming is that art of creating programs using programming
 * languages.
 * 3. Programs are converted into machine code by the compiler, and then
 * executed on the CPU.
 * 4. Variables allow us store, retrieve and manipulate data.
 * 5. Functions allow us to break our code up into pieces for later use.
 *
 * We learned last lesson that variables in javascript are declared like
 * this:
 *
 * var variableName = someValue;
 *
 * Variables can hold different types of data, which inturn affect how
 * they can be used.
 *
 * For example, if you defined on variable called "number" which containes
 * numerical data, and another variable called "name" which containes
 * textual data, adding them would be an undefined operation, as there
 * is no clear method of "adding" text and a number.
 *
 * The particular kind of data a variable contains defines that variables
 * data type. Data types encapsulate the attributes of certain types of
 * data, often with a set of associated operations
 *
 * So far, we have been working with two data types: the string data type,
 * and the number data type.
 *
 * String data types hold textual data, and are created by setting a variable
 * to some quote enclosed value. For example, the following variables all
 * have the string data type:
 *
 * var name = "Siddharth";
 * var address = '123 Main Street';
 *
 * Notice that it doesn't matter whether I use "" quotes or '' quotes. They
 * are both strings, in the compiler's eyes.
 *
 * Number data types hold, you guessed it, numerical data. They are created
 * by assigning a variable to some numerical value. For example, the
 * following variables all have the number data type:
 *
 * var age = 16;
 * var pi = 3.14;
 *
 * The interesting thing about data types is they have certain properties
 * which we can access. Numerical data types aren't that interesting because
 * the only property we can access is there value, however string data
 * types have a variety of interesting properties we can use.
 *
 * Let's jump into some code and see what's going on.
 *
 */

var string = "Siddharth";
var greeting = "Hey, my name is " + string;
var length = string.length;

console.log(greeting);
console.log("My name is");
console.log(length);
console.log("letters long");

/*
 * To run this code, enter the following command in the command line:
 *
 *   node 02-variables.js
 *
 * Cool beans, let's see what's going on. The first line says:
 *
 * var string = "Siddharth";
 *
 * By now this line should be familiar to you. In case you forgot, this
 * creates a variable called "string" to store the string "Siddharth".
 * The next line is where things get interesting:
 *
 * var greeting = "Hey, my name is " + string;
 *
 * This looks like your regular 'ol variable, except there are two new things
 * happening: the addition of two strings and the assignment of a variable to
 * a computed value.
 *
 * Firstly, notice that we're adding two strings. In javascript, the
 * addition operation (+) on strings joins them together, or concatenates
 * them. For example, the following statement would print exactly what you
 * would expect:
 *
 * console.log("Hey " + "buddy!"); // Prints "Hey buddy!"
 *
 * The result of this joining is then being assigned to the "greeting"
 * variable. In javascript, variables can also be assigned the results of
 * a computation. For example:
 *
 * var result = complexFunction("foo");
 * var sum = a + b + c + d;
 *
 * The variables above would now contain the return value of the function
 * "complexFunction" (if any), and the sum of a, b, c and d, respectively.
 *
 * In the next line of code, we take advantage of a property of the string
 * data type.
 *
 * var length = string.length;
 *
 * Every string has, among other properties, a length property.
 *
 * In javascript, the dot (.) operator is used to access an objects
 * properties. We'll talk more about the dot operator and objects later,
 * but for now undertand that it allows us to access a data types properties.
 *
 * For example, if we wanted to access the length property of other strings,
 * we could do so like this:
 *
 * console.log("cookies".length) // Prints 7
 * console.log("Hey buddy!".length) // Prints 10, remember whitespaces count
 *
 * Notice the dot operator is actually being used twice in the above examples:
 * once when retrieving the length of the strings, but again between "console"
 * and "log".
 *
 * This is because the "log" function is actually a property of the "console"
 * object, in the same way that "length" is a property of any string object.
 *
 * We'll talk more about functions in the next lesson. Until then, here are a
 * few problems to keep you occupied. I can't stress this enough, the best
 * way to learn to program is to practice!
 *
 *
 * 1. Given the variables A and B which both contained strings,
 * write a one line program which prints their combined length. Hint:
 * remember A + B joins two string.
 *
 * 2. Try running the following program in a new file:
 *
 * var item = "Cookies";
 * var amount = 1000;
 *
 * console.log(item + amount);
 *
 * What do you expect the output to be? Do you think the compiler will
 * generate an error? Why or why not?
 *
 * Run the program and discuss the results in class. Why do you think you
 * obtained the results you did?
 *
 */
