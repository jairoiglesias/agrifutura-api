
/*
	Arquivo de conexão para o MongoDb da IBM referente ao Addon do Compose do Heroku
*/

global.dbInstance = null

module.exports = function(){

	return new Promise(function(resolve, reject){

		if(global.dbInstance == null){

			const MongoClient = require('mongodb').MongoClient

			// URL para conexão com o MongoDB do Compose.IO da IBM

			const url = 'mongodb://heroku_mrlzjl0k:le3ff4nj1hnftnnmnfk7gf6uh2@ds153958.mlab.com:53958/heroku_mrlzjl0k'

			const dbName = 'heroku_mrlzjl0k'

			MongoClient.connect(url, function(err, client) {
			
				if(err) throw err

				console.log("Connected successfully to MongoDb");
			
				var db = client.db(dbName);

				global.dbInstance = db

				resolve(global.dbInstance)

			//   client.close();

				// // TESTE
				// const collection = db.collection('fio da puta')

				// collection.find().limit(5).toArray(function(err, result){
				// 	if(err) throw err

				// 	console.log(result)
				// })

			})
		}
		else{
			resolve(global.dbInstance)
		}
	})

}