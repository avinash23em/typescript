let x:number =1;

console.log(x);


interface Author {
    name:string,
   avatar:string
}

const authorone:Author={name:'mario',avatar:'.mario.png'}

interface Post{
    name:string,
    author:Author,
    title:string,
    tags:string[]
}


const newpost:Post={
    name:'idk',author:authorone,title:'something',tags:['tech','fast']
}


function create(post:Post): void {
    console.log(`this post  ${post.title} is created by ${post.author.name}`)
}

create(newpost);


//use of index key
interface Student{
   [key:string]: string|number|undefined|number[]
    name:string,
    gpa:number,
    class?:number[]
}
const student: Student={
name:'dave',
gpa:3.4,
class:[100,200]
}  

//here test is undefined still u can access using key in interface it just returns undefined
console.log(student.test);
 
//if u use keyof u dont need to use key in interface

for(const key in student){
    console.log(`${key}:${student[key as keyof Student]}`)
}