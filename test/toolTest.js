var assert = require('assert');
var tool = require('../js/tools.js');

describe('Tool test', function(){
    var tool;
    beforeEach(function() {
        tool = new Tools();
        tool.init();
    });

  it('Should is Not Exist This Week', function(){
      tool.now = 0;
      assert.equal(tool.isNotExistThisWeek(1), true);
      tool.weekFavoriteList[tool.now] = 1;
      tool.now = 1;
      assert.equal(tool.isNotExistThisWeek(1), false);
  });

  it('Init variables:', function(){

      assert.equal(tool.row, 1);
  });

});