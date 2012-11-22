/*
 * Let's start with a quick review of what we've learned so far:
 *
 * 1. Variables are created using the var keyword, and allow us to store,
 * retrieve and manipulate data.
 * 2. The data variables hold comes in different types, called data types.
 * 3. Data types separate different kinds of data so that we can deal with
 * them properly.
 * 4. Data types have certain properties which we can access using the dot
 * (.) operator.
 *
 * Keeping this in mind, let's learn a little more about functions.
 *
 * So far, we have only dealt with executing functions, for example:
 *
 * console.log("Hey");
 *
 * It turns out, that functions are actually a special kind of "data type",
 * which can actually be manipulated just like any other variable.
 *
 * For now, we're going to define functions in the following way. As we
 * progress, we will learn new ways of defining functions that are perhaps
 * less cumbersome.
 *
 * var fn = function(param1, param2, param3){
 *
 *     // ...
 *     // Let the function to it's thing
 *     // ...
 *
 *     return returnValue;
 * }
 *
 * Notice the keyword "return someExpression". This tells the function when
 * it is done executing and what it should return as a return value. If
 * there is no return value, functions will default to returning "undefined".
 *
 * In the example above, the function "fn" can be executed, or called, as
 * follows:
 *
 * var value = fn(p1, p2, p3);
 *
 * Note that the "var value =" portion of the code is only necessary if you
 * want to keep the return value of fn. If not, fn could be called like
 * this:
 *
 * fn(p1, p2, p3);
 *
 * The most important part of functions, however, is what actually happens
 * inside them. Data flowing into functions must be manipulated in some way
 * or another before anything useful can be obtained. Most often, we will
 * require some way of telling the computer to execute one function if
 * the input matches certain criteria, and another function if the
 * input does not.
 *
 * This is called a conditional structure or expression, and looks something
 * like this:
 *
 * if(a > b){
 *     runThisFunction(a, b);
 * }else{
 *     runThatFunction(b, a);
 * }
 *
 * The above code tells the computer to execute "runThisFunction" when
 * a is greater than b, or execute "runThatFunction" if that condition is
 * not met.
 *
 * In javascript, there are several other comparison operators used mainly
 * in conditional expressions. Like their math counterparts, they behave
 * more or less as you would expect. They are:
 *
 * > (greater than), < (less then), >= (greater than or equal),
 * <= (less than or equal), === (equal)
 *
 * These operators can essentially be thought of as functions which return
 * a special data type, called a boolean. A boolean is either a true or a
 * false value. For example, all of the following variables are boolean:
 *
 * var isMale = true;
 * var isFemale = false;
 *
 * Therefore, you can also insert functions into conditional statements,
 * so long as the function returns a boolean value.
 *
 * if(isCookies(food)){
 *     eat(food);
 * }else{
 *     console.log("Give me cookies!");
 * }
 *
 * This means that somewhere in the code, isCookies must be defined
 * as:
 *
 * var isCookies = function(item){
 *     // Do your magic...
 *     return true; // or false
 * }
 *
 *
 * Let's take a look at the following (fairly stupid) example which ties
 * together all of these concepts, before moving on to some more interesting
 * stuff.
 */

var isLessThanOne = function(x){
    if(x < 1){
        return true;
    }else{
        return false;
    }
}

/*
 * This code defines a function, called "isLessThanOne", which returns true
 * if it's input x is less than 1 and false otherwise.
 *
 * Note that because the return keyword stops the execution of functions,
 * isLessThanOne could also be defined as:
 *
 * var isLessThanOne = function(x){
 *     if(x < 1){
 *         return true;
 *     }
 *
 *     return false;
 * }
 *
 * The conditional expression introduced above is actually the most common
 * of several flow control structures used in javascript.
 *
 * Flow control structures, as you may have guessed from the name, are used
 * to change the flow of a program. Instead of having to execute all of your
 * code linearly, flow control structures allow the computer to jump around
 * from one place in the code to another. In that sense, functions can also
 * be thought of as flow control structures because they enable the
 * computer to execute the program in a non-linear fashion.
 *
 * The next most important flow control structure is the loop. Loops allow
 * you to tell the computer to do a certain task over and over again, until
 * a certain criteria is met. In javascript loops are defined as:
 *
 * for(var i = 0; i < posNum; i++){
 *     // The body of the loop
 * }
 *
 * This kind of loop is called a "for" loop.
 *
 * The most interesting part of a loop occurs in between the parentheses,
 * after the "for":
 *
 * (var i = 0; i < posNum; i++)
 *
 * The first statement, before the first ";", defines a variable. The
 * second statement defines the conditional expression that will be
 * evaluated every time the loop completes to check if it should keep going,
 * and the third statement is the code executed after each loop completes.
 *
 * Notice the "i++" expression in the third statement. The "++" expression
 * is a short hand for i = i + 1, which would also be acceptable. Basically,
 * it increments i by 1.
 *
 * Loops sound bad, but they're actually really easy. As usual, it's best to
 * learn using examples. The following code loops from 1 to 9, and prints
 * the value of each number in between (including 1 and 9):
 *
 * for(var number = 1; number < 10; number++){
 *     console.log(number);
 * }
 *
 * Let's analyze this code as the computer would, and it might make a little
 * more sense.
 *
 * First, we create a variable called number and assign it the value 1. Then
 * we check the conditional statement. Is number < 10? Of course it is,
 * because we just set it to 1.
 *
 * Now we execute the body of the loop and print 1. One cycle of the
 * loop has now been completed.
 *
 * This means we need to execute the third statement, which tells us to
 * increment the value of number by 1.
 *
 * Since the earlier condition wasn't met in this cycle, we need to continue
 * looping.
 *
 * Now we're at the beginning of the second loop. This means we need to
 * check the conditional statement to see if we still need to keep going.
 * Note that this process will only stop when number === 10, at which point
 * number will not be less than 10, and the loop will stop executing.
 *
 * The structure of a loop can be summarized as follows:
 *
 * Begin loop ---> Define variable
 *                      |
 *                      |
 *              --->  Check condition ---
 *              |                       |
 *              |                       |
 *              ---   Execute body   <---
 *                      |
 *                      |
 * End loop  <-- Condition fails
 *
 * Now that we've (hopefully) understood all of that, let's make a program
 * which uses these components in an interesting way ;)
 *
 */

var fib = function(n){
    if(isLessThanOne(n)){
        // You can't have negative Fibonacci numbers
        return 0;
    }

    // Create variables to hold the 0th and 1st Fibonacci numbers
    var prevNum = 0,
        currNum = 1;

    // console.log(currNum);

    // Find the nth Fibonacci number by iterating the formula n-1 times
    for(var i = 0; i < (n - 1); i++){
        // The next Fibonacci number is always the sum of the
        // previous two
        var nextNum = prevNum + currNum;

        // Set the variable holding the Fibonacci number two steps
        // back to the current Fibonacci number
        prevNum = currNum;
        // Update the current Fibonacci number to the value of the
        // next Fibonacci number
        currNum = nextNum;

        // console.log(currNum);
    }

    // Return the current number
    return currNum;
}

var fibNum = fib(10);
console.log("The 10th Fibonacci number is " + fibNum);

/*
 * Let's run this program and step through it line by line.
 *
 * var fib = function(n){
 *     if(isLessThanOne(n)){
 *         // You can't have negative Fibonacci numbers
 *         return 0;
 *     }
 *
 * By now this should be familiar. We're defining a function called fib,
 * which takes one parameter "n".
 *
 * The first thing we do is use our previous function isLessThanOne
 * to check if n is less than 1 or not. If n < 1, then isLessThanOne will
 * return true, and the code inside the if statement will be executed, if
 * not, the function will continue on as usual.
 *
 * Note that if n really is less than 1, for example -3, then the Fibonacci
 * sequence doesn't really work, and therefore we cannot allow such values.
 * In real code, you would not return 0, but rather throw an error, which we
 * will talk about later.
 *
 *   // Create variables to hold the 0th and 1st Fibonacci numbers
 *   var prevNum = 0,
 *       currNum = 1;
 *
 * Next, we initialize some variables to maintain some state inside our
 * function. Namely, to keep track of the previous and current Fibonacci
 * numbers. These, as you know, are required to generate the next Fibonacci
 * number and so on.
 *
 * Note the way they were declared. This practise of declaring several
 * variables in one statement is very common. Note that if you do this, you
 * must assign these variables values immediately.
 *
 * The next few lines are where things get a little hairy:
 *
 *   // Find the nth Fibonacci number by iterating the formula n-1 times
 *   for(var i = 0; i < (n - 1); i++){
 *       // The next Fibonacci number is always the sum of the
 *       // previous two
 *       var nextNum = prevNum + currNum;
 *
 *       // Set the variable holding the Fibonacci number two steps
 *       // back to the current Fibonacci number
 *       prevNum = currNum;
 *       // Update the current Fibonacci number to the value of the
 *       // next Fibonacci number
 *       currNum = nextNum;
 *
 *       // console.log(currNum);
 *   }
 *
 * The first line sets up a for loop which continues until i < (n-1),
 * and increments i by 1 after each cycle. Now, keep in mind that the
 * code inside the loop is going to be executed several times in a row.
 *
 * The first thing we do is create a variable called nextNum to hold the
 * next Fibonacci number, which is the sum of the two previous Fibonacci
 * numbers, in this case prevNum and currNum.
 *
 * At this point, we don't need to keep track of the number prevNum is
 * referring too because all we care about is finding the next Fibonacci
 * number, which can be created using the values in nextNum and currNum.
 *
 * Now, we need to update currNum to have the same value as nextNum, however
 * because in the next cycle of the loop we're going to be adding currNum
 * again, we need to make sure it's value isn't lost. So we store the value
 * of currNum in prevNum and update the value of currNum as desired.
 *
 * Repeating this procedure, we eventually arrive at a cycle where i = n - 1,
 * at which point, we have cycled through n Fibonacci numbers (don't forget
 * that the initial configuration of currNum is the first Fibonacci number).
 *
 * At this point, it is trivial to see that currNum contains the value of
 * the last Fibonacci number computed, which we promptly return.
 *
 *   // Return the current number
 *   return currNum;
 *
 * The correctness of this procedure can also be rigorously proven if
 * necessary.
 *
 * The key to designing this procedure was understanding how to maintain
 * state throughout, and properly manage variables. You'll soon discover
 * this is a common theme in computer. In fact, this process is called
 * maintaining an invariant. Perhaps we will talk about this in later
 * lessons.
 *
 * I realize that this is a larger lesson than usual, but trust me, it's
 * good to be exposed to these ideas as soon as possible. Once again, the
 * best way to improve your understand is to practise!!
 *
 * Here are a few questions to stimulate your thought:
 *
 * 1. Create a function which solves quadratic equations. The function
 * should begin like this:
 *
 * var solver = function(a, b, c){
 *     // Insert code here
 * }
 *
 * Now solve the quadratic equation ax^2 + bx + c = 0, where a = 9, b = 3
 * and c = -2 using this method.
 *
 * 2. Describe the problem with the following code snippet without running
 * it. Use your knowledge of for loops.
 *
 * var k = 50;
 *
 * for(var i = 0; k < 100; i++){
 *     console.log(i);
 * }
 *
 * console.log("Done!");
 *
 * Apply the necessary modification to this code and run it. It should print
 * the numbers from 0 to 99.
 *
 * 3. The modulo operator (%) allows you to test whether a number A is a
 * multiple of B. If the operation returns 0, then A is a multiple of B.
 * If not, then A is not a multiple of B. For example: 2 % 5 !== 0,
 * whereas 25 % 5 === 0.
 *
 * Write a program which prints the numbers from 1 to 100 (inclusively).
 * However, print "Foo" instead of every multiple of 3, "Bar"
 * instead of every multiple of 5, and "FooBar" for every multiple of
 * 3 and 5.
 *
 * Ergo, instead of printing 3, you would print "Foo", instead of printing
 * 10 you would print "Bar" and instead of printing 15, you would print
 * "FooBar".
 *
 */


