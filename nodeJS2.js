let blogPosts = [
    {name:"Lorem Ipsum 1" , author:"Blogger" },
    {name:"Lorem Ipsum 2" , author:"Human"},
    {name:"Lorem Ipsum 3" , author:"Blogger"},
];


//Postlar listeleniyor
const listBlog = () => {
    blogPosts.map(blogPosts => {
        console.log(blogPosts.name)
    })

};

//Post ekleniyor
const addPost = (newPost, status)=>{
    const promise = new Promise((resolve , reject)=>{
        console.log("Post ekleniyor...")
        //Duruma bakılıyor eğer true ise ekleniyor.
        if(status){
            blogPosts.push(newPost);
            resolve(blogPosts);
        }
        //false ise hata dönüyor
        else{
            reject("Post Eklenemedi.")
        }
    })
   return promise;
};
  

async function run() {
    try{
        await listBlog();
        console.log("-----------------------------")
        await addPost(  {name:"Lorem Ipsum 4" , author:"Blogger"},true);
        console.log("-----------------------------")
        await listBlog();
    }
    catch(Err){
        console.log(Err)
    }
   
} 


run();