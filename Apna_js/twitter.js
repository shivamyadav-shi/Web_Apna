const post={
    username:"Shivamshivam",
    content:"this is my %firstpost",
    likes:150,
    repost:5,
    tags:["twitterIndia","youtubeindia"],
}
console.log(post);
console.log(post.likes);
console.log(post["tags"]);
console.log(post.content)
post.username

const obj={
    1:"A",
    2:"B",
    null:"C",
    true:"d",
    undefined:"E"
}
console.log(obj)
console.log(obj.null);
// obj.1 show error because it doesn't change in string

obj.null=0;
obj.mmm=23;
console.log(obj);

delete obj.undefined;
console.log(obj);

const classInfo={
    aman:{
        age:22,
        city:"mumbai"
    },
    ajay:{
        age:21,
        city:"delhi"
    },
    nisha:{
        age:20,
        city:"lucknow"
    }
}

console.log(classInfo);
console.log(classInfo.aman);
