module.exports = function(api) {
	api.add({
		body: {
			'width': '100%',
			'height': '100%',
			'padding': 0,
			'margin': 0
		}
	}).import(__dirname + "/header.js");
}