var x = 1;
console.log(x);
var authorone = { name: 'mario', avatar: '.mario.png' };
var newpost = {
    name: 'idk', author: authorone, title: 'something', tags: ['tech', 'fast']
};
function create(post) {
    console.log("this post  ".concat(post.title, " is created by ").concat(post.author.name));
}
create(newpost);
var student = {
    name: 'dave',
    gpa: 3.4,
    class: [100, 200]
};
//here test is undefined still u can access using key in interface it just returns undefined
console.log(student.test);
//if u use keyof u dont need to use key in interface
for (var key in student) {
    console.log("".concat(key, ":").concat(student[key]));
}
//generics
var echo = function (arg) { return arg; };
var isobj = function (arg) {
    return (typeof arg == 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isobj(false));
console.log(isobj([1, 2, 3]));
console.log(isobj(null));
var checkBoolValue = function (arg) {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isobj(arg) && Object.keys(arg).length == 0) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
var processUser = function (user) {
    return user;
};
console.log(processUser({ id: 1, name: 'avi' }));
//tuples once defined cannot be changed
var tup = ['rav', 25, false];
tup[0] = 'book';
tup[1] = 30; //as it is number we cannot change into string or something in array it is possible
console.log(tup);
//enums
var type;
(function (type) {
    type[type["book"] = 0] = "book";
    type[type["director"] = 1] = "director";
    type[type["film"] = 2] = "film";
    type[type["producer"] = 3] = "producer";
})(type || (type = {}));
var doc = {
    uid: 'one',
    rid: type.film,
    data: { title: 'name of book' }
};
var doc2 = {
    uid: '2',
    rid: type.producer,
    data: 'tabla'
};
console.log(doc, doc2);
