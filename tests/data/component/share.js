module.exports = function(api) {
	api.add({
		css: {
			'.share': {
				p: {
					lineHeight: "20px",
					margin: 0
				}
			}
		},
		html: {
			'.share': {
				ul: [       
                    { li: "Option A" },
                    { li: "Option B" }
	            ]
			}
		}
	})
}