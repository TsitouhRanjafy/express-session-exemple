import express, { Application , Request , Response } from 'express'
import session from 'express-session';


declare module 'express-session' {
    interface SessionData {
        name : string;
    }
}

const app : Application = express()
const PORT = 4000;



// Configure session middleware
app.use(session({
        secret : "gfg-key",
        resave : false,
        saveUninitialized : true,
        // session expire
        cookie : { maxAge : 30000 }
    })
);

// set session in the '/' route
app.get('/',(req : Request,res : Response)=>{
    req.session.name = "johnDoe";
    res.send("Session data set");
})

// get session in the '/getSession' route
app.get('/getSession',(req : Request,res : Response)=>{

    if (req.session.name){
        res.json({
            status : "ok",
            session : req.session.name
        })
    } else {
        res.json({
            status : "ok",
            session : "not found"
        })
    }
})



app.listen(PORT,()=>{
    console.log(` _________ on est près _________`);
    
})