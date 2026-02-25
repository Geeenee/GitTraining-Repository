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



