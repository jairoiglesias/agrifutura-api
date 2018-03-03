

module.exports = function(app) {

  var multer  = require('multer')
  var upload = multer({ dest: 'uploads/' })


  app.post('/upload', (req, res) => {
    
    var imageBase64 = req.body.image_base64

    var db = require('./../libs/connectdb.js')().then(function(dbInstance){

      console.log('================')
      console.log(dbInstance)
      console.log('--------------')

      const collection = dbInstance.collection('dados')

      collection.insert({image_base64: imageBase64}, function(err, result){
        
        if(err) throw err

        res.send('1')

      })

    })

  })

}