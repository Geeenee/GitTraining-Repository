let menu = { width: 200, height:300, title: "My Menu" };

((object)=>{
	for ( let key in object ){
		//console.log(typeof object[key]);
		if(typeof object[key] === 'number') menu[key] *= 2;
		console.log(menu[key])
	}
})(menu);	
return;
let salaries = { John: 100, Ann: 160, Pete: 130, };
let sum = 0;
for( let key in salaries ){
	sum += salaries[key];
}
console.log(sum);
return;
let isEmpty = (schedule) => {
	for(let key in schedule){
		return false;
	}
	return true;
};
let schedule = {};

console.log ( isEmpty(schedule) );

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );

return;
let user = {}
user['name'] = 'John'
user['surname'] = 'Smith'

console.log(user.name + user.surname)

user['name'] = 'Pete'

console.log(user.name + user.surname)

delete user['name']

console.log(user.name + user.surname)



