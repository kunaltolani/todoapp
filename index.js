//write basic boilerplate code for express
//with express.json() middleware
const express = require("express");
const { createTodo } = require("./types");
const app = express();
app.use(express.json())
app.post("/todos", function(req,res){
const createPayload= req.body
const parsedPayload= createTodo.safeParse(createPayload);
if (!parsedPayload.success){
    res.status(411).json({msg: "you have sent the wrong input"})
return;
}
//put it in mongodb
})
app.get("/todos",function(req,res){

})
app.put("/completed", function(req,res){
const updatepayload= req.body;
const parsedPayload= updateTodo.safeParse(updatepayload);
if (!parsedpayload.success){
    res.status(411).json({msg: "you have sent the wrong input"})
return;
}
})