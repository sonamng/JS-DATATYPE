 
// var name='kumar'
// console.log(typeof(name));
 

// let x;           // Now x is undefined
// x = 5;           // Now x is a Number
// x = "John";
// console.log(x)      // Now x is a String


// let answer1 = "It's alright";             // Single quote inside double quotes
// let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
// let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
// console.log(answer1)
// console.log(answer2)
// console.log(answer3)



// let x1 = 34.00;     // Written with decimals
// let x2 = 34;        // Written without decimals 
// console.log(x1)
// console.log(x2)


// let y = 123e5;      // 12300000
// let z = 123e-5;     // 0.00123 
// console.log(y)
// console.log(z)


// let x = 5;
// let y = 5;
// let z = 6;
// console.log(x == y)       // Returns true
// console.log(x == z)       // Returns false 


// var $=67;
// const _a=23;
// console.log($+_a)

// BigInt value
// const value1 = 90071992512474099n;


// const name = 'ram';
// typeof(name); // returns "string"
// console.log(typeof(name));

// const number = 4;
// typeof(number); //returns "number"

// const valueChecked = true;
// typeof(valueChecked); //returns "boolean"

// const a = null;
// console.log(typeof(a)); // returns "object"



// var a=23;
// console.log(Boolean(a))
// console.log(typeof(Boolean(a)))


// let num=45;
// b=parseFloat(num);
// console.log(b)
// console.log(typeof(b))




// var a="sonam";
// var b=456;
// console.log(a+b)
// console.log(typeof(a+b))

// var a = 5, b = 10, c = "5";
// var x = a;
// console.log(a == c);
// console.log(a == x);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a >= c);
// console.log(a <= c);



// var a=2;
// var c=2;
// console.log(a===c);

const n=require("readline-sync")
var num=n.question("enter the number")
if (num%5==0){
     console.log("raziya");
}
else if (num%6==0){
     console.log("shiekh");
}
else if (num%5==0 && num%6==0){
     console.log("raziya shiekh")
}
else{
     console.log("not avileble");
}