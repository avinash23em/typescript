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
