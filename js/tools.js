Tools = function() {};

    Tools.prototype.init = function() {    
    this.EMPTY = -1;
    this.foods = ["Espaco 32", "Panorama", "Palatus", "Ponto Onze", "Intervalo 50", "Universitário", "Sabor Família", "Garten Bistrô"];
    this.weeks = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
    this.weekFavoriteList = [];
    this.voteList = [];
    this.now = 0;
    this.maxWeek = 5;
    this.pos = 0;
    this.loop=0;
    this.row= 1;
    this.aniFrame = null;
    for(var item in this.foods) {
        this.weekFavoriteList.push(this.EMPTY);
        this.voteList.push(0);
        this.now=0;
        }
    }
    Tools.prototype.initShow = function() {    
        this.init();
        this.showVoteFavorite("voteFavorite", "red");
        this.showWeekFavorite("weekFood");
    }

    Tools.prototype.showWeekFavorite = function(id, color) {
        var onlyWeek="<td>"+this.row+"</td>";
        for(var idWeek in this.weeks) {
            var choose = this.weekFavoriteList[idWeek];
            if (choose == this.EMPTY)  {
                name = "-";
            } else {
                name = this.foods[choose];
            } 
                
            onlyWeek+="<td style='color:"+color+";'>"+name+"</td>\n";
        }
        document.getElementById(id).innerHTML = onlyWeek;   
    }

    Tools.prototype.showVoteFavorite = function(id) {
        var str="";
        for(var idFood in this.foods) {
            var name = this.foods[idFood];
            var vote = this.voteList[idFood];    
            str+="<tr><td class='sizetd'>"+name+"</td><td class='sizetd'>"+vote+"</td></tr>\n";
        }
        document.getElementById(id).innerHTML = str;   
    }

    Tools.prototype.weekClear = function() {
        for(var id in this.weeks) {
            this.weekFavoriteList[id] = this.EMPTY;
        }
    }

    Tools.prototype.createFoodListButtons = function(id) {
        var str="";
        for(var idFood in this.foods) {
            var name = this.foods[idFood];
            str+="<div class='buttonMain'> <input class='buttonMini' type='button' value='"+name+"' onclick='tool.addFavorite("+idFood+")'/> </div>\n";
        document.getElementById(id).innerHTML = str;   
        }
    }

    Tools.prototype.getWeekNow = function(id) {
        document.getElementById(id).innerHTML = this.weeks[this.now];
    }

    Tools.prototype.isNotExistThisWeek = function(idFood) {
        var day = 0;
        while (day < this.weeks.length) {
                if (day != this.now) {
                    if (idFood == this.weekFavoriteList[day]) {
                        return false;
                    }
                }
                day++;
            }
        return true;
    }

    Tools.prototype.addFavorite = function(item) {
        if(this.isNotExistThisWeek(item)) {
            this.weekFavoriteList[this.now] = item;
            this.voteList[item]++;
            this.now++;
            if(this.now >=this.maxWeek ) {
                this.weekTotal(this.row++);
                this.now = 0;
                this.weekClear();
            }
            this.getWeekNow("weekNow");
            this.showWeekFavorite("weekFood", "red");
            this.showVoteFavorite("voteFavorite");
        } else {
            this.doAlert("Não pode repetir um favorito de Restaurante.", "400", "90", function okok() {});
        }
    }

    Tools.prototype.doAlert = function(msg, x, y, okFn) {
        var xcenter=(-parseInt(x)/2);
        var xcenterpx = xcenter + "px";
        var confirmBox = $("#alertBox");
        confirmBox.css({"width": x+"px"});
        confirmBox.css({"height": y+"px"});
        confirmBox.css({"margin-left": xcenterpx});
        confirmBox.find(".message").html(msg);
        confirmBox.find(".okok").unbind().click(function()
            {
                confirmBox.hide();
            });
        confirmBox.find(".okok").click(okFn);
        confirmBox.show();
    }

    Tools.prototype.weekTotal = function(row) {
        var cell = [];
        var query = 0;
        var table = document.getElementById("frameTable");
        var newrow = table.insertRow(row);
        cell.push(newrow.insertCell(0));
        cell[0].innerHTML = row;
        for(var idWeek in this.weeks) {
            query = parseInt(idWeek)+ 1;
            var choose = this.weekFavoriteList[idWeek];
            name = this.foods[choose];
            cell.push(newrow.insertCell(query));
            cell[query].style.color = "blue";
            cell[query].innerHTML = name;
            
        }
    }