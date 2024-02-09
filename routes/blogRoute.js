const express = require('express')
const router = express.Router()
const Blog = require("../model/blogModel")

//create a blog route
router.post("/create-blog",async(req,res)=>{
    const {title,author,content} = req.body
    if(!title || !author || !content){
        return res.status(404).json({
            success:false,
            message:"All fields are required"
        })
    }else{
        try{
            const blog = new Blog({
                title,
                author,
                content
            })
            await blog.save();
            res.status(201).json({
                success:true,
                message:"Blog created successfully"
            })
        }catch(err){
            console.log(err)
            res.status(500).json({
                success:false,
                message:"Blog not created"
            })
        }
    }
    
})  

//get all blogs
router.get("/blogs",async(req,res)=>{
    try{
        const blogs = await Blog.find({})
        if(blogs){
            res.status(200).json(blogs)
        }
    }catch(err){
        console.log(err)
         res.status(404).json({"message":"Blog not found"})
    }
})

//get single blog
router.get("/blogs/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (blog) {
            res.status(200).json(blog);
        } 
    } catch (err) {
        res.status(404).json({ message: "Blog not found" });
    }
});

module.exports=router