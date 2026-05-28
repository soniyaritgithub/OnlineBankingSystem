const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.post(
"/register",
async (req, res) => {

try {

const {
username,
email,
password
} = req.body;

console.log(
"Register Data:",
username,
email,
password
);

const existingUser =
await User.findOne({
$or: [
{ email },
{ username }
]
});

if(existingUser){

return res
.status(400)
.json({
message:
"User already exists"
});

}

const user =
new User({

username,
email,
password

});

await user.save();

console.log(
"Saved User:",
user
);

res.status(201).json({

message:
"Registration Successful"

});

}

catch(err){

console.log(
"Register Error:",
err
);

res.status(500).json({

message:
"Registration Failed"

});

}

});

router.post(
"/login",
async (req,res)=>{

try{

const {
email,
password
}=req.body;

console.log(
"Received:",
email,
password
);

const user =
await User.findOne({
$or: [
{ email: email },
{ username: email }
]
});

console.log(
"User Found:",
user
);

if(
!user ||
user.password !== password
){

return res
.status(400)
.json({

message:
"Invalid Credentials"

});

}

const safeUser = {

_id: user._id,
username: user.username,
email: user.email

};

res.json({

message:
"Login Success",

user: safeUser

});

}

catch(err){

console.log(
"Login Error:",
err
);

res.status(500)
.json({

message:
"Login Failed"

});

}

});

router.get(
"/profile",
async (req,res)=>{

try{

const email =
req.query.email;

const user =
await User.findOne({
email
}).select("-password");

if(!user){

return res
.status(404)
.json({

message:
"User not found"

});

}

res.json(user);

}

catch(err){

console.log(err);

res.status(500)
.json({

message:
"Profile Error"

});

}

});
router.get("/profile", async (req, res) => {

try {

const email =
req.query.email;

const user =
await User.findOne({
email
});

if(!user){

return res
.status(404)
.json({

message:
"User not found"

});

}

res.json(user);

}

catch(err){

console.log(err);

res.status(500)
.json({

message:
"Profile Error"

});

}

});


module.exports =
router;
