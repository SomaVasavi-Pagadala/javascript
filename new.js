// const a=[1,2,3,4];
// const b=[2,3,4,5];
// const c=a.concat(b);
// console.log(c);
  

// const a1=[1,2,3,4,5];
// const re=a1.slice(7);
// console.log(re);


// const g=[1,2,3,4,5];
// const res=g.splice(2);
// console.log(res);

// const f=[1,2,3,4];
// f.push(6);
// console.log(f);
  

// const d=[1,2,3,4,5];
// d.unshift(8);
// console.log(d);

// //pop and unshift difference
// const s=[1,2,3,4,5];
// s.pop();
// console.log(s);
// const r=[1,2,3,4,5];
// r.unshift(6);
// console.log(r);

// //find length of the Array
//  const arr=[1,2,3,4,5];
// const length=arr.length;
// console.log(length);
  

// const str=["ram","vijay","bhavani","divija"];
// const length1=str.length;
// console.log(length1);


// //how do you access Elementof the array by using it index
// //map and forEach difference
// const a=[1,2,3,4];
// const b=a.map(a1=>a1*2);
// console.log(b);

// const c=[1,2,3,4];
// const d=c.forEach(c1=>console.log(c1*2));
 
// //sort
// const string=["bhavani","kuppagiri","anitha","neha"];
// string.sort();
// console.log(string);
// how can chake if a value in array in javascript

// const a=[1,2,3,4,5];
// const res=a.reduce((accumulater,value)=>{
//   return  accumulater+value;
// },0)
// console.log(res);//15


// const b=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// const res1=b.filter(value=>
// {
//     if (value%3==0) {
//         return true;
//     }
//     else{
//         return false;
//     } 
// })
// console.log(res1);//[ 3, 6, 9, 12, 15 ]

// const string=["good","morning","to","all"];
// const res2=string.join("-");
// console.log(res2);

// const c=[1,2,3,4,5,6];
// const res3=c.shift(3);
// console.log(c);

// console.log(res3);

// const str=['ravi','vijay','kumar','ram','gopi','sai'];
// str.sort();
// str.push('vasavi');
// console.log(str);
// str.pop();
// console.log(str);
// str.unshift("revathi");
// console.log(str);

// // const f=[1,2,3,4,5];
// // f.fill(3);
// // console.log(f);

// const f=[1,2,3,4,5];
// f.fill(10,2,5);
// console.log(f);
  
// const a=Array.of(1,2,4);
// console.log(a);

// const a1=[1,2,3];
// const b1=[2,3,4];
// const c=a1.concat(b1);
// console.log(c);

// const num=[1,2,3];
// const res=num.every(value=>{
//     return value>0;
// })
// console.log(res);


// const array=[1,2,3,4,5];
// array.typeof;
// console.log(array);


function Person(fname, lname, age, color) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.color = color;
  }
  
  const f = new Person("John", "Doe", 50, "blue");
  const s = new Person("Johnny", "Rally", 22, "green");
  
  console.log(f);
  console.log(s);
  
  Person.prototype.company = "Infosys";
  
  console.log(f);
  
  console.log(s);
  
