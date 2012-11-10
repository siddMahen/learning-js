/*
 * Programming is the art of making a computer do what you want.
 *
 * By themselves, computers are relatively stupid. They don't understand
 * how to do anything unless they are explicitly told what to do.
 *
 * By programming a computer, you are basically telling it what to do.
 *
 * Fundamentally, a program is a sequence of statements which are interpreted
 * and executed by the computer.
 *
 * For example, the following would be a program to make you a nutella
 * sandwich:
 *
 * buy bread.
 * buy nutella.
 * slice bread.
 * apply nutella on bread.
 *
 * Ofcourse, this does not work in reality as a computer does not understand
 * the instructions "buy", "slice", "apply", or the items "bread" and "nutella".
 *
 * In reality, computer programs are created using programming languages. These
 * languages are relatively easy for a computer to translate into yet another
 * language, called machine code, which the CPU understands.
 *
 * Before you begin programming, it is important to understand how programming
 * languages are converted into machine code.
 *
 * This process is facilitated by a compiler. A compiler is a program which
 * takes input from one language and turns it into another (often simpler)
 * language.
 *
 * The compilation of the code by the compiler follows three main steps:
 *
 * 1. Preprocessing
 * 2. Compilation
 * 3. Linking
 *
 * In preprocessing, the compiler checks that the source code is properly
 * formatted and that the code written is indeed valid code.
 *
 * In the compilation, the compiler converts the source code into machine
 * code which can be understood by the computer.
 *
 * In the linking step, the compiler takes the final program (now in machine
 * code) and attaches the necessary system hooks, so it can be run as a
 * program.
 *
 * Note that in reality, compilers are often highly complex programs and
 * are notoriously difficult to create. The steps described here are a vast
 * simplification. In reality, compilers perform many more operations along the
 * way; most notably optimization, static analysis and macro expansion.
 *
 * Now enough theory, lets write our first javascript program :D
 *
 */

var name = "Siddharth";
console.log(name);

/*
 * To run this program, open the terminal window and run the command
 *
 * node 01-intro.js
 *
 * Now that we see what the program does let's step through it line by line.
 *
 * var name = "Siddharth";
 *
 * This line creates a variable called "name" and sets it's value to
 * "Siddharth". In javascript, variables are created using the var keyword.
 * For example, all of the following would be variables:
 *
 * var cookies = "yummy";
 * var number = 7;
 *
 * You can probably guess what the values of these variables will be.
 *
 * Variables allow you to easily manipulate values. You can perform operations
 * on variables, read the value of variables and set variables to new values.
 *
 * In the second line, we pass the variable "name" to the function
 * "console.log".
 *
 * console.log(name);
 *
 * Functions are little operations within programs which can be reused to
 * make code cleaner and easier to write. Functions have an input and an output,
 * which can both be nothing. Generically, functions are used in the following
 * manner:
 *
 * functionName(inputOne, inputTwo, ...);
 *
 * We will talk about functions a little more later, but for now, understand
 * that the "console.log" function accepts one variable as input and prints
 * the value of that variable. Notice that it does not return an output.
 *
 * Before you go, there are a few things you should know about javascript
 * syntax.
 *
 * Every line of the program, or statement, should end in a semicolon ";".
 *
 * Lines which begin with "//" are comments. Comments are ignored by the
 * compiler, and hence have no effect on the program. Comments can also
 * be created by enclosing text in "slash*" "*slash". This text has
 * been placed inside a comment.
 *
 * If you're feeling adventurous, try the following problems. Remember, the
 * best way to learn programming is to fail!
 *
 * 1. Recall that a compiler checks that code is written properly before it
 * is compiled and executed. What is the problem with the following code
 * snippet? Write a working version of the code. Remeber to do so in a
 * separate file.
 *
 * myName = "Alison";
 * console.log(myName);
 *
 * 2. Think about some of the restrictions of performing computation on a
 * computer. Are there any limits to what a computer can and cannot compute?
 *
 * 3. Write down some problems which you think computers might be bad at
 * solving. Write down some problems which you think computers might be good
 * at solving.
 *
 * Can everything be computed? What if you had all the time in the universe?
 * What if you had all the memory in the universe? Explain.
 *
 */
