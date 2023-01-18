const express=require("express")
const path=require("path")

const app=express();

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


app.get('/',(req,res)=>{
    let htmlVentanas=(path.resolve(__dirname,'./views/home.html'))
    res.sendFile(htmlVentanas)
})

app.get('/register',(req,res)=>{
    let htmlVentanas=(path.resolve(__dirname,'./views/register.html'))
    res.sendFile(htmlVentanas)
})

app.get('/login',(req,res)=>{
    let htmlVentanas=(path.resolve(__dirname,'./views/login.html'))
    res.sendFile(htmlVentanas)
})

app.listen(3030,()=>console.log("servidor escuchando"));
