var assert = require('assert');
var sinon = require('sinon');
var tool = require('../js/tools.js');

// beforeEach( function() {
//     this.toolMock = sinon.mock(tool);
// });

// afterEach( function() {;
//     this.toolMock.restore();
// });

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

    it('Should check variables', function(){
        expectFoods = ["Espaco 32", "Panorama", "Palatus", "Ponto Onze", "Intervalo 50", "Universitário", "Sabor Família", "Garten Bistrô"];
        expectWeeks = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
        assert.equal(tool.row, 1);
        assert.equal(tool.maxWeek, 5);
        assert.deepEqual(tool.foods, expectFoods);
        assert.deepEqual(tool.weeks, expectWeeks);
    });

    it('Should week is cleared', function(){
        tool.weekFavoriteList[0] = 1;
        assert.equal(tool.weekFavoriteList[0], 1);
        tool.weekClear();
        assert.equal(tool.weekFavoriteList[0], -1);
    });

    it('Should getWeekNow is mocked', function(){
        this.toolMock = sinon.mock(tool);
        this.toolMock.expects('getWeekNow').withArgs(1);
        tool.getWeekNow(1);
        this.toolMock.restore();
        this.toolMock.verify();

    });

    it('Should doAlert is mocked', function(){
        this.toolMock = sinon.mock(tool);
        this.toolMock.expects('doAlert').withArgs("blabla");
        tool.doAlert("blabla", "1", "2",function okok() {});
        this.toolMock.restore();
        this.toolMock.verify();

    });

    it("Should Add Favorite of Panorama in week Terça-feira", function(){
        this.now = 1;
        var expectVoteFavorite = 'Espaco 320\n' +
        'Panorama1\n' +
        'Palatus0\n' +
        'Ponto Onze0\n' +
        'Intervalo 500\n' +
        'Universitário0\n' +
        'Sabor Família0\n' +
        'Garten Bistrô0\n';
        document.body.innerHTML =
            '<div>' +
            '  <div id="weekNow">AAAA</div>' +
            '  <div id="weekFood">AAAA</div>' +
            '  <div id="voteFavorite">AAAA</div>' +
            '</div>';

        tool.addFavorite(1);
        assert.equal(document.getElementById("weekNow").innerHTML,"Terça-feira");
        assert.equal(document.getElementById("weekFood").innerHTML,"1Panorama\n-\n-\n-\n-\n");
        assert.equal(document.getElementById("voteFavorite").innerHTML, expectVoteFavorite);
    });

    it("Should getWeekNow 1 is 'Segunda-feira'", function(){
        this.now = 1;
        document.body.innerHTML =
            '<div>' +
            '  <div id="weekNow" >Empty Week</div>' +
            '</div>';

        tool.getWeekNow("weekNow");
        assert.equal(document.getElementById("weekNow").innerHTML,"Segunda-feira");
    });

    it("Should is week Total in row 1", function(){
        this.now = 1;
        expect = '<tbody><tr></tr><tr><td>1</td><td style="color: blue;">Panorama</td>'+
                 '<td style="color: blue;">Palatus</td><td style="color: blue;">Ponto Onze</td>'+
                 '<td style="color: blue;">Intervalo 50</td><td style="color: blue;">undefined</td></tr></tbody>';

        document.body.innerHTML =
            '<div>' +
            '  <table id="frameTable"><tr></tr></table>' +
            '  <div id="weekNow">AAAA</div>' +
            '  <div id="weekFood">AAAA</div>' +
            '  <div id="voteFavorite">AAAA</div>' +
            '</div>';
        tool.addFavorite(1);
        tool.addFavorite(2);
        tool.addFavorite(3);
        tool.addFavorite(4);
        tool.weekTotal(1);
        assert.equal(document.getElementById("frameTable").innerHTML, expect);
    });


});