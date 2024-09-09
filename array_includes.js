// const names=['rakash','rohith','vijay','kumar','sai'];// inside names
// const res =names.includes('vijay'); // will return true or false
// const res1=names.includes('gopi') // is not inside name it's false
// console.log(res);//true
// console.log(res1);//false
// true or false
 

//the array includes method it can find if an element is included inside an array 

const fruits=['apple','orange','mango'];
const res= fruits.includes('orange');
if (res) {//true
    console.log('yuppy!');
    
}else{//false
    console.log("sad... let's buy an orange");
    
}


const fruits1=['apple','mango'];
const res1= fruits1.includes('orange');
if (res1) {
    console.log('yuppy!');
    
}else{
    console.log("sad... let's buy an orange");
    
}


