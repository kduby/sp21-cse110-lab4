Part 1a.
 1. values added: 20
 2. final result: 20
 3. values added: 20
 4. Error: result is not defined within block scope. This is due to the fact that declaring a variable using let can only be accessed within the block is declared in.
 5. Error: assignment to constant variable. This is due to the fact that you can not change the value of a variable declared as constant.

Part 1b.
 1.  The code will print out 3 because that is the value of i and it can still be accessed becaused it is declared as a var which can be used out of scope.
 2. The code will print out 150 because variables declared as var can be used anywhere in the function.
 3. The code will print out 0 because Math.round() rounds the value of the parameter, which is 0.01 is in this case.
 4. An array of [50, 100, 150] is returned because these are the values calculated and stored during the iterations of the for loop.
 5. There will be an error because variables declared using let can only be accessed within the block.
 6. This will also cause an error becaused discountedPrice is a variable declared using let and can only be used within the block.
 7. The code will print 150 because it declared within the function block and used within it.
 8. This function will still return the same array as before, [50, 100, 150] even though it is declared using let. This is because the variable is declared and used within the same block.
 9. The code will cause an error because the variable i is declared using let and can not be accessed outside of the declared block.
 10. This will print the length of 3 because it is declared as const and was not changed/ can not be changed.
 11. This function will return the array [50, 100, 150] because of the iterations of the for loop these values will be stored in the array and redeclared every time even though it is of const type.
 12. notations
     A. student.name;
     B. student['Grad Year']
     C. student.greeting()
     D. student['Favorite Teacher'].name
     E. student.courseLoad[1]  
13. Arithmetic
    A. 32 because this is a string value plus a number value, concatenation.
    B. 1 because you can not subtract strings, so JS parses the numbers as Integers and subtracts 3 by 2 to get 1.
    C. 3 because null becomes 0 and you get 3 + 0.
    D. 3null because string plus nulll means concatenation since you can't add strings.
    E. 4 because true has the value of 1 so you do 1 + 3.
    F. 0 because false has the value of 0 and so does null, so you do 0 + 0.
    G. 3undefined because you can not add strings and therefore you will concatenate
    H. The output is NaN because undefined is parsed as the number NaN and because you can't subtract strings you just do 3 - NaN.
14. Comparison
    A. true because the ASCII value of 2 i greater than the number 1 (50 > 1)
    B. false because dictionary comparison of 2 is greater than 12
    C. true because == transforms the type before comparison 2 == 2
    D. false because === is strictly comparing without changing the type
    E. false because using == we know that 1 is not equal to 2
    F. true because 2 has a value and is not 0
15. Double equals is a comparison operator which transforms the types before comparison. While triple equals is strictly compares the values and returns false if they are not the same type.
17. Nothing is printed because we do not have any print statements, the array is only returned. We create an empty array in modifyarray method which we poplate with 1,2,3. And in the for loop we do the calculations we end up with 2,4,6. 
19. 1 4 3 2  
