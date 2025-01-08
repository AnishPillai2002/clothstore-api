const router = require("express").Router();

router.get("/usertest",(req,res)=>{

    res.send("User Test");
});

router.post("/userpost",(req,res)=>{
    username=req.body.name;
    res.send("username : "+username);
    console.log(username);
})


module.exports = router;