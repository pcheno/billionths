module.exports = function(app){

	app.get("/googlesignin", 
		(req, res) => require("../config/google.js")())
}