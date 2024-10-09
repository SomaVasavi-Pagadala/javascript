const names = ["sainadth", "vasavi"]

console.log(names.length) // 2 = no of elements in names array

for(let i = 0; i < names.length; i++){
  console.log(names[i].length)
}

for(const i of names){
  console.log(i.length)
}

let i = 0;
while(i < names.length){
  console.log(names[i].length)
  i++;
}

const lengths = names.map((e) => {
    return e.length;
  })
  console.log(lengths)
  