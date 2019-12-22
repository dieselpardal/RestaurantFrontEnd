class Tool  {

    foodList = ["Espaco 32", "Panorama", "Palatus", "Ponto Onze", "Intervalo 50"];
    weekList = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
    weekFavoriteList = [];
    voteList = [];
    now = 0;
    maxWeek = 5;

    constructor() {    
        for(var item in this.foodList) {
            this.weekFavoriteList.push(-1);
            this.voteList.push(0);
            this.now=0;
        }
    }

    showFavorite(id) {
        var str="";
        for(var item in this.weekList) {
            var choose = this.weekFavoriteList[item];
            if (choose == -1)  {
                name = "-";
            } else {
                name = this.foodList[choose];
            } 
                
            str+="<td>"+name+"</td>\n";
        document.getElementById(id).innerHTML = str;   
        }
    }

    weekClear() {
        for(var item in this.weekList) {
            this.weekFavoriteList[item] = 0;
        }
    }

    getFoodList(){
        return foodList;
    }

    createFoodListButtons(id) {
        var str="";
        for(var item in this.foodList) {
            var name = this.foodList[item];
            str+="<div class='buttonMain'> <input class='buttonMini' type='button' value='"+name+"' onclick='tool.addFavorite("+item+")'/> </div>\n";
        document.getElementById(id).innerHTML = str;   
        }
    }

    getWeekNow(id) {
        document.getElementById(id).innerHTML = this.weekList[this.now];
    };

    addFavorite(item) {
        this.weekFavoriteList[this.now] = item;
        this.voteList[item]++;
        
        this.now++;
        if(this.now >=this.maxWeek ) {
            this.now = 0;
            this.weekClear();
        }
        this.getWeekNow("weekNow");
        this.showFavorite("weekFood");
        
    }

    
}