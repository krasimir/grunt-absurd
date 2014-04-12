module.exports = function(api) {
  api.storage("mixin", function(px) { 
    return {
      fontSize: px + 'px'
    }
  });
}
