class Tool  {

    EMPTY = -1;
    foods = ["Espaco 32", "Panorama", "Palatus", "Ponto Onze", "Intervalo 50", "Universitário", "Sabor Família", "Garten Bistrô"];
    weeks = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
    weekFavoriteList = [];
    voteList = [];
    now = 0;
    maxWeek = 5;
    pos = 0;
    loop=0;
    row= 1;
    aniFrame = null;

    constructor() {    
        for(var item in this.foods) {
            this.weekFavoriteList.push(this.EMPTY);
            this.voteList.push(0);
            this.now=0;
        }

        this.showVoteFavorite("voteFavorite", "red");
        this.showWeekFavorite("weekFood");
        
    }

    showWeekFavorite(id, color) {
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

    showVoteFavorite(id) {
        var str="";
        for(var idFood in this.foods) {
            var name = this.foods[idFood];
            var vote = this.voteList[idFood];    
            str+="<tr><td class='sizetd'>"+name+"</td><td class='sizetd'>"+vote+"</td></tr>\n";
        }
        document.getElementById(id).innerHTML = str;   
    }

    weekClear() {
        for(var id in this.weeks) {
            this.weekFavoriteList[id] = this.EMPTY;
        }
    }

    getFoodList(){
        return foods;
    }

    createFoodListButtons(id) {
        var str="";
        for(var idFood in this.foods) {
            var name = this.foods[idFood];
            str+="<div class='buttonMain'> <input class='buttonMini' type='button' value='"+name+"' onclick='tool.addFavorite("+idFood+")'/> </div>\n";
        document.getElementById(id).innerHTML = str;   
        }
    }

    getWeekNow(id) {
        document.getElementById(id).innerHTML = this.weeks[this.now];
    }

    isNotExistThisWeek(idFood) {
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

    addFavorite(item) {
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

   

    doAlert(msg, x, y, okFn) {
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

    weekTotal(row) {
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

    accessButton(access) {
        var buttons = document.getElementById("createButton");
        buttons.style.display = access;
    }

    
}