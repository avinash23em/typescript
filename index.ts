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