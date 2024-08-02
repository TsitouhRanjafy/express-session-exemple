# Exemple d'utilisation express-session 
On va faire une exemple d'utilisation du `express-session` avec `typescript`
## Installation
Premièrement , executer ce cmd ci-dessous pour initialiser notre projet.
```
  npm init -y
```
Après , installé les dependecies nécessaire.

```
  npm i --save-dev express express-session typescript @types/express @types/express-session
```
## Configuration
On va maintenant configurer notre projet. Initialiser d'abord typescript et créer le dossier source (comme mon depôt)
```
  tsc --init
```
```
  // tscconfig.json
  {
  "compilerOptions": {
    "target": "es2022",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
     "outDir": "./dist/",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": ["./src/**/*.ts"]
}
```
```
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
```
On peut lancer le serveur maintenant 
```
  npm test
```
![Screenshot_2024-08-02_16-26-09](https://github.com/user-attachments/assets/94876e9c-b619-4f57-8a79-9fc480a16f9b)


