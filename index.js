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
    if (isobj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
var processUser = function (user) {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
