const passport = require('passport');
const pool = require('../database');
const LocalStrategy = require('passport-local').Strategy;
const helpers = require('../lib/helpers');


passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { Username }= req.body;
    const newUser = {
        username,
        password
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    newUser.id = result.insertId;
    return done (null, newUser);
}))
passport.serializeUser((user, done) =>{
    done(null, user.id);
});
passport.deserializeUser( async(id, done) => {
   const rows = pool.query('SELECT * FROM users WHERE id = ?', [id]);
   done (null, rows[0]);
});
passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done ) => {
   const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
   if (rows.length>0){
       const user =rows[0];
       const validPassword = await helpers.matchPassword(password, user.password);
       console.log(rows[0]);
       if(validPassword) {
           done(null, user, req.flash('success', 'Bienvenido '+ user.username));
       } else {
           done(null, false, req.flash( 'message','Contraseña Incorrecta'));
       }
   }else {
       return done(null, false, req.flash( 'message','El usuario que ha ingresado no existe'));
   }
}));