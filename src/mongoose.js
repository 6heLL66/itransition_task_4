let mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nikita:7866944nik@animsdev.8bk2d.mongodb.net/itransit?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) throw err
		else console.log("mongo connect")
	})

let UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	Regdate: String,
	Logdate: String,
	pass: String,
	blocked: Boolean
})

let User = mongoose.model('users', UserSchema)

module.exports = {
	User
}