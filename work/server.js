import express from "express";
import bcrypt from "bcrypt";

const app =express();


app.use(express.static("public"));
app.use(express.json())                                       



// routers
app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:"public"});
})

app.get('/login',(req,res) =>{
    res.sendFile("login.html",{root:"public"})
})

app.get('/signup',(req,res) =>{
    res.sendFile("signup.html",{root:"public"})
})

app.post('/signup',(req,res) =>{
    const {name,email,password,number,tac} =req.body
    // form validation
// if(fullname.length < 3){
//     res.json({'alert' : 'name must be 3 letter long'});
// } else if (!email.length ){
//     res.json({'alert':'Input your email'});
// } else if (password.length < 8 ){
//     res.json({'alert':'Your password must 8 letter long'});
// } else if (Number(number) || number.length < 10 ){
//     res.json({'alert':'invalid number, please enter valid one'});
//     }else if (!tac.checked ){
//         res.json({'alert':' Your must agree to our terms and conditions'});
//     }
})

app.get('/404',(req,res)=>{
    res.sendFile("404.html",{root:"public"});
})
app.use((req,res)=>{
    res.redirect('/404')
})

app.listen(5000,()=>{
    console.log("let listen port 5000");
})











