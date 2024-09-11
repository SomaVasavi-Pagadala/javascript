const countries=['usa','india','europe'];
const result=countries.join();
const res=countries.join('-');
const res1=countries.join(', ');
const res2=countries.join('');
console.log(result);//usa,india,europe
console.log(res);//usa-india-europe

console.log(res1);//usa, india, europe
console.log(res2);//usaindiaeurope



  

// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).
