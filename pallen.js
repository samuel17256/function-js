//pallendrome
function palindrome(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    if (string === reversedString) {
        console.log("This is a palindrome");
    } else {
        console.log("This is not a palindrome");
    }
}
palindrome("nurse");

// Function to find the largest number
function findLargestNumber(numbers) {
    let largest= 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest=numbers[i];
        }
    }
    return largest;
}
let number = [1, 2, 1000, 3, -1];
let largestNumber = findLargestNumber(number);
// console.log(largestNumber);


//function factoria
function calculateFactoria(number) {
    let factoria = 1;
    for (let i = 1; i <= number; i++) { 
        factoria *= i; 
    }
    console.log(factoria) 
}

// calculateFactoria(5)

//function count Vowels
function countVowels(string) {
    let vowels = "aeiouAEIOU";
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                result++;
            }
        }
    }
    // console.log(result)
}
//  countVowels("stephanie"); 

//function to fine prime numbers
function isPrime(num){
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
    console.log(isPrime(2))


//function to merge two arrays

    // function mergeAndSort(array1, array2, order = 'ascending') {
    //     const mergedArray = [...array1, ...array2];
    //     mergedArray.sort((a, b) => {
    //       if (order === 'ascending') {
    //         return a - b; 
    //       } else {
    //         return b - a; 
    //       }
    //     });
    //     return mergedArray;
    //   }
      
      
    //   const array1 = [1, 3, 5];
    //   const array2 = [2, 4, 6];
      
      
    //   const ascendingSortedArray = mergeAndSort(array1, array2);
    //   console.log("Ascending:", ascendingSortedArray);
      
      
    //   const descendingSortedArray = mergeAndSort(array1, array2, 'descending');
    //   console.log("Descending:", descendingSortedArray);

//function find the index of numbers
let myArray=[1,2,3,4,5,6]
function findIndex(){
    for(let i in myArray){
        console.log(i)
    }
}
// findIndex(myArray)

//find multiples
    // function multiplesOf(numbers, number) { 
    //     let multiples = [];
    //     for (let i = 0; i < numbers.length; i++) {
    //       if (numbers[i] % number === 0) { 
    //         multiples.push(numbers[i]); 
    //       }
    //     }
      
    //     return multiples;
    //   }
      
    //   console.log(multiplesOf([4, 5, 6, 7, 8], 2)); 



// savings
let savings=[
    {
        name:"Dakshak",
        amount:100000,
    },
    {
        name:"Praise",
        amount:10000,
    },
    {
        name:"Timothy",
        amount:50000,
    },
    {
        name:"Plangshak",
        amount:70000,
    }
]
// console.log(savings)
 
//adding amount
function addAmount(name, amount){
    for(let person of savings){
        if(person.name===name){
            person.amount+=amount;
            console.log(`I added ${amount} to ${name}.  New Amount is ${person.amount}`)
        }
    }
}


//getting a member by name and amount
function getMember(name, amount){
    for(let person of savings){
        if(person.name===name && person.amount===amount){
            console.log(`this is ${name} and his amount is ${amount}`)
        }
    }
}

//wihdrawing some amount
function withdrawAmount(name, amount){
    for(let person of savings){
        if(person.name===name){
            person.amount-=amount;
            console.log(`I withdraw ${amount} from ${name}.  New Amount is ${person.amount}`)
        }
    }
}

//deleting a member by name

function deleteMem(name){
    for(let person of savings){
        if(person.name !== name){
            console.log(person)
        }
    }
}

// addAmount('Dakshak', 2000)
// getMember('Timothy',50000)
// withdrawAmount('Praise', 1000)
// deleteMem('Plangshak')