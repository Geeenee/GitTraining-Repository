let salaries = {
	'Joe' : 65,
	'John': 50,
	'Doe' : 23,
}

  let topSalary = function(obj){
	let maxName = null, maxSalary = 0;

    for (const [ name, salary ] of Object.entries(obj)){
	if(salary > maxSalary){
		maxName = name;
		maxSalary = salary;
	}
    }


	  return maxName;
  }

console.log(topSalary(salaries));
return;
let user = {
	name : 'John',
	years : 30
};


let name, age, isAdmin;

({name, years : age, isAdmin = false} = user);

console.log(name);
console.log(age);
console.log(isAdmin);


