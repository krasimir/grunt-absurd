module.exports = function(api) {
	api.add({
		body: {
			header:{
				h1: "AbsurdJS is awesome",
				h2: "Yes, it is ..."
			},
			'section.container': require(__dirname + "/content.js")()
		}
	})
}
