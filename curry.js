//normal
const sum = (a,b,c) =>{
	console.log(a+b+c);
}
sum(1,2,3);

//currying
const sums = (a) =>{
	return (b) =>{
  	return (c) =>{
    	console.log(a+b+c);
    }
  }
}

sums(1)(2)(4);