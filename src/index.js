const express = require("express");
const path=require("path");
const exhbs=require("express-handlebars");
const methodOverride=require("method-override");
const exSession=require("express-session");
const flash=require('connect-flash');
const passport=require('passport');
const app=express();
require('./database');
require('./config/passport');

//Settings

app.set("port", process.env.PORT || 3000); //para elegir puerto 3000 o uno asignado por el sistema
app.set("views", path.join(__dirname,"views"));//define las rutas para que express pueda localizarlas
app.engine(".hbs", exhbs({
    defaultLayout: "main", //con esto se puede reutilizar el header, fondo y demás en todas las paginas sin repetir codigo
   // layoutsDir: path.join(app.get("views", "layouts")),
    secondLayout:"signin",
    extname:".hbs"
}));
app.set("view engine", ".hbs");

//Middlewares

app.use(express.urlencoded({extended: false})); //sirve para recibir informacion que el usuario ingresa. por ej: email
app.use(methodOverride("_method")); //sirve para que las paginas puedan utilizar mas metodos que POST o GET, sino tambien DELETE,etc.
app.use(exSession({
    secret:"alejandro",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//Global Varibles
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
})


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/socios'));
app.use(require('./routes/usuarios'));
app.use(require('./routes/ctacte'));
app.use(require('./routes/caja'));
app.use(require('./routes/lecturas'));

//Static Files
app.use(express.static(path.join(__dirname,"public")));

//Server Init
app.listen(app.get("port"),() =>{
    console.log("server on port", app.get("port"))
});