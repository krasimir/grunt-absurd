module.exports = function(api) {
	api.add({
		body: {
			width: '100%',
			height: '100%',
			margin: 0,
			padding: 0,
      'my-custom-gradient': ['red','yellow', 'blue']
		},
    '.header': [
      {
        height: '100%',
        backgroundColor: 'white'
      },
      api.storage('mixin')(18)
    ]
	});
}
