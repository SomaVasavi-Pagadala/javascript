/*1) array create chey with names - each entry will have a string which is combination of ‘first name,last name’.
 2) Array ni last name tho sort Chei. 
 3) inko array create Chei which will only have the first names from the initial array that you created. 
4) first create chesina array ni modify chesi, only last names aa array lo undela output teeskoni ravali.*/

let names=["sai,pagadala","ram,kuppagiri","soma,pagadala","bhavani,kuppagiri"];
console.log(names);
/*[
    'sai,pagadala',
    'ram,kuppagiri',
    'soma,pagadala',
    'bhavani,kuppagiri'
  ]*/

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
        return 0;//lastnameA-lastnameB
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
console.log(firstname);//[ 'ram', 'bhavani', 'sai', 'soma' ]
const lastname=names.map(newname=>newname.split(",")[1]);
console.log(lastname);//[ 'kuppagiri', 'kuppagiri', 'pagadala', 'pagadala' ]

console.log(names);

/*[
    'ram,kuppagiri',
    'bhavani,kuppagiri',
    'sai,pagadala',
    'soma,pagadala'
  ]*/

