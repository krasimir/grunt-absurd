module.exports = function(api) {
	api.add({
		css: {
			'.social-widget': {
				margin: 0,
				padding: 0,
				a: {
					color: '#000'
				}
			}
		},
		html: {
			'.social-widget': {
				p: "Spread the world.",
				a: "What's up"
			}
		}
	})
}