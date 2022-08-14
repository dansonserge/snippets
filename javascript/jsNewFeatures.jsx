
//=======================
//LET and CONST

/* 
   LET indicates the variable can still be re-assigned to another value, 
   whille with CONST, we're saying that's the final value
*/

let favNumber = 7;
const LargestSea ='The Philippine Sea'

/* 
    favNumber can still be re-assigned without any issue, 
    but if you try to re-assign LargestSea, you will get a parser error, Assignment to constant variable.
*/

const Tenary = ()=>{
 return (<div className={success?'success-item' :'item'}>
    Items List
</div>)}

//=============================
//Template literals

const ageOutput = `You are ${age} years old `

//instead of the old way
const ageOutputOld = 'You are ' + age + ' years old'

//=================

//Shorthand Properties

const userName = "Danson"

// instead of doing this
let user = {userName: userName};
//let's do this to use the shorthand property
let userGood = {userName}  


//=====================
//Rest/Spread

const restSpread =()=>{
    const user2  = {
        name:'Tony',
        age:12
      }
      
      const otherPropertie = {
      hobby:'hiking',
      bestColor:'red'
    }

    // use spread operator to join the two objects
    let joined = {...user2, ...otherPropertie}
    //this can also be used in arrays
    
}

//========
//distructuring
/* Destructuring is a way of accessing the values inside an object or array in a more cleaner and readable way. */

const distructuring1 =  ()=> {
    const person ={
        favNumber:'green',
        name:'Mike',
        cars:['mercedes', 'toyota']
      }
    
      /* before es6, if we want to get the individual properties in the person object,
       we'll first need to assign each of the properties to a varaiable; */
    
    
    const favNumber1 = person.favNumber;
    const name = person.name
    const cars = person.cars
    
    // with object destructuring, we could do something like below;
    
    function distructuring(){
        const { favNumber, name, cars } = person
    console.log(favNumber, name, cars)
    }
    


const renameProprtyNameAfterDistructure =()=>{
//what if we want to rename the name property on the person object immediatelty after destructuring, 
const {name:realName, favNumber, cars} = person;
console.log(realName)
}


const giveDefaultValueAfterDistructuring = ()=>{
    //What if we destructure an object and we want to give it a default value, 
    //-> even while we're not sure this is available yet on the object,

    const {name, favNumber, cars, favFood='jollof rice'  } = person
    console.log(favFood) // 'jollof rice'

}

const distructureNestedObjects = ()=>{
    /* What if we destructure an object and we want to give it a default value, 
    even while we're not sure this is available yet on the object, */
        const customer = {
            name:'Tom',
            mobile:"078 7070 2325",
            email:"tomfield@email.com",
            address:{
                country:'UK',
                city:'East Davoch',
                zipCode:"AB34",
                street:'33 Guildford Rd'
            } 
        }

        const {address: { country } } = customer
        console.log(country) // UK
}

const restOperator = ()=>{
    /* 
        in our previous topic, we talked about 'rest/spread', 
        Let's talk more about the rest operator, most of the time, 
        we use both interchangeably, specifically we use 'rest' 
        to copy part or rest of an array or object. 
    */

    let students = {classA:12, classB:13, classC:14, classD:15}

    let {classA, classB, ...remaining} = students;

    console.log(remaining);
}


   /* we can use our HeaderComponent like this <HeaderComponent className='my-item' /> 
    thereby applying our 'my-item' class as if we added it manually to the component itself.

 */
const HeaderComponent = ({title, ...restProps})=>{
    return <div {...restProps}> {title} </div>
    }
}

//============
//Default Parameters
/* 
    Default parameters allows us to set a default value for a function parameter
    if its missing while being called. For example;
*/
const defaultParameters = ()=>{
function greetUser(username='user'){
    return `Welcome ${username}, hope you bought some pizzas`
    }
    
    const greetingsOne = greetUser('Greg')
    console.log(greetingsOne) // 'Welcome Greg, hope you bought some pizzas'
    
    const greetingsTwo = greetUser()
    console.log(greetingsTwo) // 'Welcome user, hope you bought some pizzas'

}
//===================
//ES Modules

/*
person.js
----------
====> NAMED EXPORT
export const person = {
  name:'Simon',
  color:'yellow'
}

import { person } from 'person.js'
console.log(person) // { name:'Simon', color:'yellow' }
*/

import { person } from 'person.js'
console.log(person) // { name:'Simon', color:'yellow' }

/* 
    but what if we already have a variable in our file having the same name? 
    well we can rename it with alias import {person as currentPerson } from './person.js' 
    we have successfully rename person to currentPerson.
*/

import { person as currentPerson } from "./person.js";

console.log(currentPersion) // { name:'Simon', color:'yellow' }
console.log(person) 


//=======



