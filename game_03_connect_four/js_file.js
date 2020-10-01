var image_name_and_location = [
    {
        name: "blue_sphare",
        location: "images/blue_sphare.jpg",
    },{
        name: "red_sphare.jpg",
        location: "images/red_sphare.jpg",
    },
    {
        name: "background",
        location: "images/background.jpg",
    }
]
var player_turn = 0;
var play_gamme = document.getElementsByClassName("play_game")[0];
var check_ara = [];
var game_over_flag = 0;

start_game();

function start_game(){
    check_ara_setup_fucntion();
    setup_function();
}

function image_click_function(obj){

    if(game_over_flag==0){
        let id_name = obj.getAttribute("id");
        let len = id_name.length;
        let i = parseInt(id_name.slice(len-2,len-1));
        let j = parseInt(id_name.slice(len-1,len));

        if(player_turn %2 == 0){
            document.getElementById("player_number").innerHTML = "Blue";
        }else {
            document.getElementById("player_number").innerHTML = "Red";
        }
        
        if((check_ara[i][j]==0 && check_ara[i+1][j]!=0) || i==5){
            player_turn++;
            if(player_turn % 2 ==0){
                //player 2......................
                let image_div = document.getElementById(id_name);
                image_div.src = image_name_and_location[0].location;
                check_ara[i][j]=2;
                if(winning_condition(2)){
                    console.log("player 2 wins.");
                    let winner_span = document.getElementById("winner");
                    winner_span.innerHTML = "Player Blue.";
                    game_over_flag=1;
                    alert("Player Blue wins.")
                }
            }else {
                //player 1........................
                let image_div = document.getElementById(id_name);
                image_div.src = image_name_and_location[1].location;
                check_ara[i][j]=1;
                if(winning_condition(1)){
                    console.log("player 1 wins.");
                    let winner_span = document.getElementById("winner");
                    winner_span.innerHTML = "Player Red.";
                    game_over_flag=1;
                    alert("Player Red wins.");
                }
            }
        }else {
            console.log("You are not allowed to choose the grid.");
            alert("You are not allowed to choose the grid.");
        }
    }
}

function check_ara_setup_fucntion(){
    for(let i=0;i<7;i++){
        check_ara[i]=[];
        for(let j=0;j<7;j++){
            check_ara[i][j]=0;
        }
    }
}
function setup_function(){
    for(let i=0;i<6;i++){
        for(let j=0;j<7;j++){
            let img_elemnt = document.createElement("img");
            img_elemnt.setAttribute("src",image_name_and_location[2].location);
            img_elemnt.setAttribute("onclick","image_click_function(this)");
            if(i!=0){
                if(j==6){
                    img_elemnt.setAttribute("style","margin-top: 2px;");
                }else {
                    img_elemnt.setAttribute("style","margin-top: 2px;margin-right: 3px");
                }
            }else{
                if(j!=6){
                    img_elemnt.setAttribute("style","margin-right: 3px;");
                }
            }
            let id_name = image_name_and_location[2].name + i +j;
            img_elemnt.setAttribute("id",id_name);
            play_gamme.appendChild(img_elemnt);
        }
    }
}
function winning_condition(pn){
    if((check_ara[0][0]==pn && check_ara[0][1]==pn && check_ara[0][2]==pn && check_ara[0][3]==pn)
        ||(check_ara[1][0]==pn && check_ara[1][1]==pn && check_ara[1][2]==pn && check_ara[1][3]==pn)
        ||(check_ara[2][0]==pn && check_ara[2][1]==pn && check_ara[2][2]==pn && check_ara[2][3]==pn)
        ||(check_ara[3][0]==pn && check_ara[3][1]==pn && check_ara[3][2]==pn && check_ara[3][3]==pn)
        ||(check_ara[4][0]==pn && check_ara[4][1]==pn && check_ara[4][2]==pn && check_ara[4][3]==pn)
        ||(check_ara[5][0]==pn && check_ara[5][1]==pn && check_ara[5][2]==pn && check_ara[5][3]==pn)

        ||(check_ara[0][1]==pn && check_ara[0][2]==pn && check_ara[0][3]==pn && check_ara[0][4]==pn)
        ||(check_ara[1][1]==pn && check_ara[1][2]==pn && check_ara[1][3]==pn && check_ara[1][4]==pn)
        ||(check_ara[2][1]==pn && check_ara[2][2]==pn && check_ara[2][3]==pn && check_ara[2][4]==pn)
        ||(check_ara[3][1]==pn && check_ara[3][2]==pn && check_ara[3][3]==pn && check_ara[3][4]==pn)
        ||(check_ara[4][1]==pn && check_ara[4][2]==pn && check_ara[4][3]==pn && check_ara[4][4]==pn)
        ||(check_ara[5][1]==pn && check_ara[5][2]==pn && check_ara[5][3]==pn && check_ara[5][4]==pn)

        ||(check_ara[0][2]==pn && check_ara[0][3]==pn && check_ara[0][4]==pn && check_ara[0][5]==pn)
        ||(check_ara[1][2]==pn && check_ara[1][3]==pn && check_ara[1][4]==pn && check_ara[1][5]==pn)
        ||(check_ara[2][2]==pn && check_ara[2][3]==pn && check_ara[2][4]==pn && check_ara[2][5]==pn)
        ||(check_ara[3][2]==pn && check_ara[3][3]==pn && check_ara[3][4]==pn && check_ara[3][5]==pn)
        ||(check_ara[4][2]==pn && check_ara[4][3]==pn && check_ara[4][4]==pn && check_ara[4][5]==pn)
        ||(check_ara[5][2]==pn && check_ara[5][3]==pn && check_ara[5][4]==pn && check_ara[5][5]==pn)

        ||(check_ara[0][3]==pn && check_ara[0][4]==pn && check_ara[0][5]==pn && check_ara[0][6]==pn)
        ||(check_ara[1][3]==pn && check_ara[1][4]==pn && check_ara[1][5]==pn && check_ara[1][6]==pn)
        ||(check_ara[2][3]==pn && check_ara[2][4]==pn && check_ara[2][5]==pn && check_ara[2][6]==pn)
        ||(check_ara[3][3]==pn && check_ara[3][4]==pn && check_ara[3][5]==pn && check_ara[3][6]==pn)
        ||(check_ara[4][3]==pn && check_ara[4][4]==pn && check_ara[4][5]==pn && check_ara[4][6]==pn)
        ||(check_ara[5][3]==pn && check_ara[5][4]==pn && check_ara[5][5]==pn && check_ara[5][6]==pn)

        ||(check_ara[0][0]==pn && check_ara[1][0]==pn && check_ara[2][0]==pn && check_ara[3][0]==pn )
        ||(check_ara[0][1]==pn && check_ara[1][1]==pn && check_ara[2][1]==pn && check_ara[3][1]==pn )
        ||(check_ara[0][2]==pn && check_ara[1][2]==pn && check_ara[2][2]==pn && check_ara[3][2]==pn )
        ||(check_ara[0][3]==pn && check_ara[1][3]==pn && check_ara[2][3]==pn && check_ara[3][3]==pn )
        ||(check_ara[0][4]==pn && check_ara[1][4]==pn && check_ara[2][4]==pn && check_ara[3][4]==pn )
        ||(check_ara[0][5]==pn && check_ara[1][5]==pn && check_ara[2][5]==pn && check_ara[3][5]==pn )
        ||(check_ara[0][6]==pn && check_ara[1][6]==pn && check_ara[2][6]==pn && check_ara[3][6]==pn )

        ||(check_ara[1][0]==pn && check_ara[2][0]==pn && check_ara[3][0]==pn && check_ara[4][0]==pn )
        ||(check_ara[1][1]==pn && check_ara[2][1]==pn && check_ara[3][1]==pn && check_ara[4][1]==pn )
        ||(check_ara[1][2]==pn && check_ara[2][2]==pn && check_ara[3][2]==pn && check_ara[4][2]==pn )
        ||(check_ara[1][3]==pn && check_ara[2][3]==pn && check_ara[3][3]==pn && check_ara[4][3]==pn )
        ||(check_ara[1][4]==pn && check_ara[2][4]==pn && check_ara[3][4]==pn && check_ara[4][4]==pn )
        ||(check_ara[1][5]==pn && check_ara[2][5]==pn && check_ara[3][5]==pn && check_ara[4][5]==pn )
        ||(check_ara[1][6]==pn && check_ara[2][6]==pn && check_ara[3][6]==pn && check_ara[4][6]==pn )

        ||(check_ara[2][0]==pn && check_ara[3][0]==pn && check_ara[4][0]==pn && check_ara[5][0]==pn )
        ||(check_ara[2][1]==pn && check_ara[3][1]==pn && check_ara[4][1]==pn && check_ara[5][1]==pn )
        ||(check_ara[2][2]==pn && check_ara[3][2]==pn && check_ara[4][2]==pn && check_ara[5][2]==pn )
        ||(check_ara[2][3]==pn && check_ara[3][3]==pn && check_ara[4][3]==pn && check_ara[5][3]==pn )
        ||(check_ara[2][4]==pn && check_ara[3][4]==pn && check_ara[4][4]==pn && check_ara[5][4]==pn )
        ||(check_ara[2][5]==pn && check_ara[3][5]==pn && check_ara[4][5]==pn && check_ara[5][5]==pn )
        ||(check_ara[2][6]==pn && check_ara[3][6]==pn && check_ara[4][6]==pn && check_ara[5][6]==pn )

        ||(check_ara[2][0]==pn && check_ara[3][1]==pn && check_ara[4][2]==pn && check_ara[5][3]==pn )
        ||(check_ara[1][0]==pn && check_ara[2][1]==pn && check_ara[3][2]==pn && check_ara[4][3]==pn )
        ||(check_ara[2][1]==pn && check_ara[3][2]==pn && check_ara[4][3]==pn && check_ara[5][4]==pn )
        ||(check_ara[0][0]==pn && check_ara[1][1]==pn && check_ara[2][2]==pn && check_ara[3][3]==pn )
        ||(check_ara[1][1]==pn && check_ara[2][2]==pn && check_ara[3][3]==pn && check_ara[4][4]==pn )
        ||(check_ara[2][2]==pn && check_ara[3][3]==pn && check_ara[4][4]==pn && check_ara[5][5]==pn )
        ||(check_ara[0][1]==pn && check_ara[1][2]==pn && check_ara[2][3]==pn && check_ara[3][4]==pn )
        ||(check_ara[1][2]==pn && check_ara[2][3]==pn && check_ara[3][4]==pn && check_ara[4][5]==pn )
        ||(check_ara[2][3]==pn && check_ara[3][4]==pn && check_ara[4][5]==pn && check_ara[5][6]==pn )
        ||(check_ara[0][2]==pn && check_ara[1][3]==pn && check_ara[2][4]==pn && check_ara[3][5]==pn )
        ||(check_ara[1][3]==pn && check_ara[2][4]==pn && check_ara[3][5]==pn && check_ara[4][6]==pn )
        ||(check_ara[0][3]==pn && check_ara[1][4]==pn && check_ara[2][5]==pn && check_ara[3][6]==pn )

        ||(check_ara[3][0]==pn && check_ara[2][1]==pn && check_ara[1][2]==pn && check_ara[0][3]==pn )
        ||(check_ara[4][0]==pn && check_ara[3][1]==pn && check_ara[2][2]==pn && check_ara[1][3]==pn )
        ||(check_ara[3][1]==pn && check_ara[2][2]==pn && check_ara[1][3]==pn && check_ara[0][4]==pn )
        ||(check_ara[5][0]==pn && check_ara[4][1]==pn && check_ara[3][2]==pn && check_ara[2][3]==pn )
        ||(check_ara[4][1]==pn && check_ara[3][2]==pn && check_ara[2][3]==pn && check_ara[1][4]==pn )
        ||(check_ara[3][2]==pn && check_ara[2][3]==pn && check_ara[1][4]==pn && check_ara[0][5]==pn )
        ||(check_ara[5][1]==pn && check_ara[4][2]==pn && check_ara[3][3]==pn && check_ara[2][4]==pn )
        ||(check_ara[4][2]==pn && check_ara[3][3]==pn && check_ara[2][4]==pn && check_ara[1][5]==pn )
        ||(check_ara[3][3]==pn && check_ara[2][4]==pn && check_ara[1][5]==pn && check_ara[0][6]==pn )
        ||(check_ara[5][2]==pn && check_ara[4][3]==pn && check_ara[3][4]==pn && check_ara[2][5]==pn )
        ||(check_ara[4][3]==pn && check_ara[3][4]==pn && check_ara[2][5]==pn && check_ara[1][6]==pn )
        ||(check_ara[5][3]==pn && check_ara[4][4]==pn && check_ara[3][5]==pn && check_ara[2][6]==pn ) 
    ){
        return 1;
    }else {
        return 0;
    }
}