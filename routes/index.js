const express = require('express');
const router = express.Router();
const userSchema = require('../models/usuarios');

//get para devolver al index 
router.get('/',(req,res)=>{
    res.redirect("/view");
});

router.get('/insert',(req,res)=>{
    res.render('insert');
});

router.get('/view', async (req,res) => {    
    try{
        const users = await userSchema.find({})
        res.render('view',{
            users
        });
    }catch(error){
        console.error(error);
        res.status(500).send("Error al cargar los usuarios");
    }
    
});

router.post('/insert', async (req,res) => {
    try{
        const user = new userSchema({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            email : req.body.email,
            edad : req.body.edad,
            gradoEscolaridad: req.body.escolaridad,
            aniosExperiencia: req.body.experiencia,
            especialidad : req.body.especialidad,
            datosInteres : req.body.interes,
            ultimaEmpresa : req.body.empresa
        });
        await user.save();
        console.log("Usuario agregado a la base de datos");
        res.redirect("/view");
    }catch(error){
        console.error(error);
        res.status(500).send('Error al ingresar el usuario');
    }
});

router.get('/viewUser/:nombre', async (req,res) => {
    try {
        const user = await userSchema.findOne({nombre:req.params.nombre});
        console.log("nombre del usuario >> ",user.nombre);
        res.render('viewUser',{
            user
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
})
module.exports = router;