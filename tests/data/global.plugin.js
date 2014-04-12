module.exports = function(api) {
  api.plugin('my-custom-gradient', function(api, colors) {
    return {
      background: 'linear-gradient(to bottom, ' + colors.join(", ") + ')'
    };
  });
}
