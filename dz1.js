function myIsNaN(value) {
    return value !== value;
}
console.log(myIsNaN(5));      
console.log(myIsNaN('abc'));   
console.log(myIsNaN(NaN));    
console.log(myIsNaN(undefined));