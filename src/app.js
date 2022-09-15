const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();

//port no
const port=process.env.PORT || 3000;


//public static path
const template_path=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");
const staticpath=path.join(__dirname,"../public");



app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partialspath);
app.use(express.static(staticpath));

//routing
app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404page",{
        error:"404 error page oops!",
    })
})

app.listen(port,()=>{
   console.log(`listen port is ${port}`);
});