// const cars=["toyota","ford","infiniti"];
// console.log(cars);


// const cars=["toyota","ford","infiniti"];
// let car=cars[2];
// console.log(car);

//changing an array elements
// const cars=["toyota","ford","infiniti"];
// cars[3]="nesane"
// console.log(cars);


//converting an array to a string
// const fruits=["banana","orange","apple","mango"];
// document.getElementById("arraysOne").innerHTML=fruits.toString();

// collections of items is Array
// linnear
// reverese
// const array=[1,2,3];
// array.reverse();
// console.log(array);


  //push method
//   const array=[1,2,3,4,5];
//   array.push(6,7,8,9,);
//   console.log(array);

  //unshift
//   const array=[1,2,3,4];
//   array.unshift(6);
//   console.log(array);

//includes boolean or not
// const array=[1,2,3,4,5];
// console.log(array.includes(3));
// console.log(array.includes(11));

// const array=[1,2,3,4,5];
// console.log(array.includes(3,2));
// console.log(array.includes(2,2));
 
// const definitelyAnArray=[1,2,3];
// const probablyNotAnArray='a';
// console.log(Array.isArray(definitelyAnArray));
// console.log(Array.isArray(probablyNotAnArray));

//from
// const array =[1,2,3];
// const newarray=array.from(array);
// newarray[1]=0;
// console.log(array);
// console.log(newarray);
  

// //Arrayof 
// const array =Array.of(1,undefined,[1,2,3],'hello world');
// console.log(array);
    
// indexof->find index
// const names=['tyrice','candace','joe','sky'];
// console.log(names.indexOf('joe'));

 //lastIndexOf
//  const array=[1,2,3,4,5,4,3,2,1];
//  console.log(array.lastIndexOf(3));
 
 //toString
//  const array=[1,2,3,4]
//  console.log(array.toString());

//  toLocaleString
//  const array=[1,2,3]
// console.log(array.toLocaleString());
// console.log(array.toLocaleString('en-us',{style:'currency',currency:'USD'}));
 
//join
// const array=['don\`t','forget','to','subscribe'];
// console.log(array.join());
// console.log(array.join(':)'));
  //pop
//   const array=['a','b','c','d']
//   console.log(array.pop());
//   console.log(array);

  //shift
//   const array=['a','b','c','d']
//   console.log(array.shift());
//   console.log(array);

// moving slice it can opposite sides pf the array moiving on to slice
// what does slice do will it returns a copy of array from a starting point to an ending point and that ending point is exclusive so that means up to but not including
// const  array=['a','b','c','d','e','f','g']
// const arrayAfterC=array.slice(3)
// console.log(arrayAfterC);
// console.log(array);

//middleOfArray in slice
// const  array=['a','b','c','d','e','f','g']
// const middleOfArray =array.slice(2,5)
// console.log(middleOfArray);
//middle of the array by calling slice 2 and 5 what i am saying


//iterator style methods(forEach)
// const array=['subscribe','and','like','please','!']
// array.forEach(item=>{
// console.log(item);


// })


// const array1=['subscribe','and','like','please','!']
// array1.forEach((item,index,array)=>{
// console.log(item);
// console.log(index);
// console.log(array);


//})
//find and find is really helpful when you want to find something in array well actually what ends up happening is it finds the very first instance of an item in an array otherwise it returns undefined so if you have an array let
