module.exports = function(app){
		
	app.get("/", (req, res) => {
		res.render("index");
	})

	app.get('/profile', (req, res) => {
		res.render("index");
	})

	app.get("/index", (req, res) => {
		res.render("contact");
	})
}