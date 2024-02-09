const blogContainer = document.getElementById('blog-container')
const fetchBlogs = async() =>{
    try{
     const res = await fetch("http://localhost:8080/api/blogs");
     const blogs = await res.json()
     blogs.forEach((blog)=>{
        let div = document.createElement('div')
        div.classList.add('col-lg-4','my-3','col-md-6')
        div.innerHTML = `
       <div class="border p-2 rounded bg-light">
       <b>Date: ${blog.date.slice(0,10)}</b>
       <p>Author: ${blog.author}</p> 
       <h5>${blog.title}</h5>
      <p>${blog.content.slice(0,60)}..</p>
       <a href="/blogs/${blog._id}">Read Blog</a>
       </div>
        
        `
        blogContainer.appendChild(div)
     })

    }catch(err){
     console.error(err)
    }
 }
 
 fetchBlogs()