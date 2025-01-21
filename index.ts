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

//generics

const echo=<T>(arg :T):  T =>arg;

const isobj=<T>(arg :T): boolean=>{
    return (typeof arg=='object' && !Array.isArray(arg) &&arg!=null)
}

console.log(isobj(false));
console.log(isobj([1,2,3]));
console.log(isobj(null));

//ex 2

interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isobj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}




interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log(processUser({ id: 1, name: 'Dave' }))