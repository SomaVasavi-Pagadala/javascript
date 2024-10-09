const names=['rakash','rohith','vijay','kumar','sai'];// inside names
const res =names.includes('vijay'); // will return true or false
const res1=names.includes('gopi') // is not inside name it's false
const res2=names.includes()
console.log(res);//true
console.log(res1);//false
console.log(res2);

// true or false
 

//the array includes method it can find if an element is included inside an array 

const fruits=['apple','orange','mango'];
const res3=fruit=>fruits.includes(fruit);//fruit parameterre
console.log(res3('orange')?'yuppy!':"sad... let's buy an orange");
//(the ternary operator condition ? expression_if_true : expression_if_false is used to print 'yuppy!' if the result is true,
// or "sad... let's buy an orange" if the result is false.)


// const fruits1=['apple','mango'];
// const res1= fruits1.includes('orange');
// if (res1) {//false
//     console.log('yuppy!');
    
// }else{
//     console.log("sad... let's buy an orange");//sad... let's buy an orange
    
// }


  