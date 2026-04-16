let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;


console.log( JSON.stringify(meetup, function replacer(key, value) {
	if( !key ) return value; 
	return value === meetup ? undefined : value;
}));
return;

let user = {
	name: "John Smith",
	age: 35,
};
let userJson = JSON.stringify(user)

console.log(JSON.parse(userJson));
