module.exports = function(api) {
	api.add({
		html: {
			body: {
				h1: {
					_attrs: {
						class: "title"
					},
					_: "AbsurdJS"
				}
			}
		}
	});
}