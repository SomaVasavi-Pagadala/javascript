const ages=[2,11,18,22];
const res=ages.find(age=>age>18);
console.log(res);//22

const names=['ravi','vijay','sai','gopi','abhi'];
const res1=names.find(item=>item==='sai');
console.log(res1);


const persons=[
    {
        name:'teja',
        age:22
    },{
        name:'kumar',
        age:20
    },{
        name:'ivan',
        age:18
    }
];
const age=persons.find(person=>person.name==='teja');
console.log(age);//{ name: 'teja', age: 22 }








// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.