import express, { Application , Request , Response } from 'express'
import session from 'express-session';


// ** interface pour notre session
declare module 'express-session' {
    interface SessionData {
        name : string;
    }
}

const app : Application = express()
const PORT = 4000;



// Configure session middleware
app.use(session({
        secret : "notreSecret-key",
        resave : false,
        saveUninitialized : true,
        // session expire (30 second)
        cookie : { maxAge : 30000 }
    })
);

// set session in the '/' route
app.get('/',(req : Request,res : Response)=>{
    req.session.name = "Tsitohaina";
    res.send("Session data set");
})

// get session in the '/getSession' route
app.get('/getSession',(req : Request,res : Response)=>{

    // ** est ce que le session name est definie ?
    if (req.session.name){
        // ** si oui
        // ** afficher le session name
        res.json({
            status : "ok",
            session : req.session.name
        })
    } else {
        // ** si non
        // ** dit que le session est non definie ou expirer
        res.json({
            status : "ok",
            session : "non definie ou expirer"
        })
    }
})


// demarrer serveur
app.listen(PORT,()=>{
    console.log(` _________ on est près _________`);
    
})