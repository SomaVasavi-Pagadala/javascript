let names=["sai,pagadala","ram,kuppagiri","soma,pagadala","bhavani,kuppagiri"];
console.log(names);

//sort by last name
names.sort((a,b) => {//any two elements a,b by using callback function
    const lastnameA = a.split(",")[1];
    const lastnameB = b.split(",")[1];
    if(lastnameA < lastnameB){
        return -1;
    }
    else if (lastnameA > lastnameB) {
        return 1
    } 
    else {
        return 0;//lastnameA=lastnameB
    }

    //console.log(a,b);
    /*ram,kuppagiri sai,pagadala
    soma,pagadala ram,kuppagiri
    bhavani,kuppagiri soma,pagadala */
   // console.log(lastnameA);
    //console.log(lastnameB);
    /*[ 'ram', 'kuppagiri' ]
[ 'sai', 'pagadala' ]
[ 'soma', 'pagadala' ]
[ 'ram', 'kuppagiri' ]
[ 'bhavani', 'kuppagiri' ]
[ 'soma', 'pagadala' ]*/
/*kuppagiri
  pagadala
  pagadala
  kuppagiri
  kuppagiri
  pagadala*/

})
const firstname=names.map(newname=>newname.split(",")[0]);
console.log(firstname);
const lastname=names.map(newname=>newname.split(",")[1]);
console.log(lastname);


console.log(names);


