let salaries = {
	'Joe' : 65,
	'John': 50,
	'Doe' : 23,
}

  let topSalary = function(obj){
    let entries = Object.entries(obj);
    return entries.length ? entries.sort( (a, b) => b[1] - a[1])[0][0] : null;
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


