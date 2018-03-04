

module.exports = function(app) {

  var multer  = require('multer')
  var upload = multer({ dest: 'uploads/' })

  app.get('/', (req, res) => {
    res.render('camera')
  })

  app.get('/dashboard', (req, res) => {
    res.render('dashboard')
  })

  app.post('/upload', (req, res) => {
    
    var imageBase64 = req.body.image_base64
    var dataPlantio = req.body.dataPlantio
    var tipoCultura = req.body.tipoCultura
    var dataPrevisaoColheita = req.body.dataPrevisaoColheita
    var tipoDefensivoAgric = req.body.tipoDefensivoAgric
    var descricaoProblema = req.body.descricaoProblema
    var geoLocation = req.body.geoLocation

    var registro = {
      image_base64,
      dataPlantio,
      tipoCultura,
      dataPrevisaoColheita,
      tipoDefensivoAgric,
      tipoDefensivoAgric,
      descricaoProblema,
      geoLocation
    }

    var db = require('./../libs/connectdb.js')().then(function(dbInstance){

      console.log('================')
      console.log(dbInstance)
      console.log('--------------')

      const collection = dbInstance.collection('dados')

      collection.insert(registro, function(err, result){
        
        if(err) throw err

        res.send('1')

      })

    })

  })

}