







//create a functoin to get a square roo ->getRoot2
//dont allow for -0
//return a messge for Nan


//create function to add two numbers ->getAdd
const getAdd= (fst,sec) => {

  return (fst + sec);

}
// console.log(getAdd(-1,2)) //adds the 2 numbers

//create function to subtract -> getDifference
const getDifference = (fst,sec) =>{
  return (fst-sec);

}

// console.log(getDifference(2,100))//subtracts the fst and sec parameter

//create function to multiply -> getProduct
 const getProduct = (fst ,sec ) => {
  return (fst *sec );

}
// console.log(getProduct(5,10))// mutltiplies the fst and sec paramter

//create function to divide -> getDividend
const getDividend = (fst , sec ) =>{
  return (fst/sec)
}
// console.log(getDividend(100,4))// dived fst by sec parameter

//create function to inverse -> inverseNumber
const inverseNumber =(numb) => {
  if(numb===0) {
    return 0;
}
  return (numb*-1);
   
}

// console.log(inverseNumber(100))//inverse numb paramter to positive or negative
//can return negative 0!!

//create a function to convert a percent to a decimal -> getDecimalFromPercent

const getDecimalFromPercent = (numb) => {
  return (numb / 100 );
}

// console.log (getDecimalFromPercent(69))// creates a decimal form of the numb paramter

//create a function to get a random number -> getRandomInt
const getRandomInt = (numb) =>{
  return Math.floor((Math.random() * numb))
}
// console.log(getRandomInt(200)) creates random number between 0 and numb

//create function to return the remainder of two divided number -> getRemainder
const getRemainder = (fst, sec)  =>{
  return (fst % sec);
}
// console.log(getRemainder(100,24))// creates how many of fst will left after
//evenly dividing it into sec

//create a function to return pi ->getPi
const getPI = () =>{
  if (getPI===undefined){
  return 1}
  return (Math.PI)
  

}
console.log(getPI())// makes Pi lma
