let user = {
	name : 'Gene',
	years : 25,
};

let name, age, isAdmin;

({name, years : age, isAdmin = false} = user);

console.log(name);
console.log(age);
console.log(isAdmin);


