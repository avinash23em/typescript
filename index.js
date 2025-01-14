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
