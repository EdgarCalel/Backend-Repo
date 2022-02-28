const axios = require('axios');
const { Persona} = require('../db')

const CreateTime = async (req, res) =>{
  const { name, stepTime }= req.body;
  const timeMoment = await Persona.create({
    name, stepTime})
  timeMoment.save()
res.send('se ha registrado exitosamente')
}

const searchRegistros = async (req, res)=>{
try {
  const dataFull = await Persona.findAll()
  res.json(dataFull)
} catch (error) {
  console.log(error)
}
}



module.exports = { CreateTime, searchRegistros }