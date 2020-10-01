var game_div = document.getElementsByClassName("play_game")[0];
var invator_start_end_index = [4,11];
var moving_direction = 1;
var gun_position = 7;
var bullet_position = [];

grid_setup_function();
invator_setup_function();
setInterval("invator_move_function()",1000);
setInterval("moving_buttel_function()",500);
document.addEventListener("keyup",moving_gun_function);

function grid_setup_function(){
    for(let i=0;i<15;i++){
        for(let j=0;j<15;j++){
            let div_element = document.createElement("div");
            div_element.setAttribute("style","width:20px;height:20px;background:blue;");
            let id_name = "grid"+i+"_"+j;
            div_element.setAttribute("id",id_name);
            game_div.appendChild(div_element);
        }
    }
    let id_name = "grid"+14+"_"+gun_position;
    let div_element = document.getElementById(id_name);
    div_element.style.background = "red";
}

function invator_setup_function(){
    for(let i=0;i<3;i++){
        for(let j=4;j<12;j++){
            let div_id = "grid"+i+"_"+j;
            let div_element = document.getElementById(div_id);
            div_element.style.background = "yellow";
        }
    }
}

function invator_move_function(){
    if(moving_direction==1){
        for(let i=0;i<3;i++){
            let j = invator_start_end_index[0];
            let div_id = "grid" + i + "_" + j ;
            let div_element = document.getElementById(div_id);
            div_element.style.background = "blue";

            j = invator_start_end_index[1] + 1;
            div_id = "grid" + i + "_" + j ;
            div_element = document.getElementById(div_id);
            div_element.style.background = "yellow";
        }
        invator_start_end_index[0] = invator_start_end_index[0] + 1;
        invator_start_end_index[1] = invator_start_end_index[1] + 1;
        if(invator_start_end_index[1] == 14){
            moving_direction = 0;
        }
    }else {
        for(let i=0;i<3;i++){
            let j = invator_start_end_index[1];
            let div_id = "grid" + i + "_" + j ;
            let div_element = document.getElementById(div_id);
            div_element.style.background = "blue";

            j = invator_start_end_index[0] - 1;
            div_id = "grid" + i + "_" + j ;
            div_element = document.getElementById(div_id);
            div_element.style.background = "yellow";
        }
        invator_start_end_index[0] = invator_start_end_index[0] - 1;
        invator_start_end_index[1] = invator_start_end_index[1] - 1;
        if(invator_start_end_index[0] == 0){
            moving_direction = 1;
        }
    }
}

function moving_gun_function(e){
    if(e.keyCode === 39){
        let id_name = "grid"+14+"_"+gun_position;
        let div_element = document.getElementById(id_name);
        div_element.style.background = "blue";
        if(gun_position < 14)
            gun_position++;
        id_name = "grid"+14+"_"+gun_position;
        div_element = document.getElementById(id_name);
        div_element.style.background = "red";
    }else if(e.keyCode == 38){
        console.log("up button is clicked");
        let x = 13;
        let y = gun_position;
        let id_name = "grid"+x+"_"+y;
        let div_element = document.getElementById(id_name);
        div_element.style.background = "pink";
        bullet_position.push([x,y]);
    }else if(e.keyCode == 37){
        let id_name = "grid"+14+"_"+gun_position;
        let div_element = document.getElementById(id_name);
        div_element.style.background = "blue";
        if(gun_position > 0)
            gun_position--;
        id_name = "grid"+14+"_"+gun_position;
        div_element = document.getElementById(id_name);
        div_element.style.background = "red";
    }
}

function moving_buttel_function(){
    let len = bullet_position.length;
    for(let i=0;i<len;i++){
        let x = bullet_position[i][0];
        let y = bullet_position[i][1];
        if(x>=0){
            let id_name = "grid"+x+"_"+y;
            let div_element = document.getElementById(id_name);
            div_element.style.background = "blue";
            if(x>0){
                x--;
                id_name = "grid"+x+"_"+y;
                div_element = document.getElementById(id_name);
                let collusion_check_color = div_element.style.background;
                if(collusion_check_color == "yellow"){
                    div_element.style.background = "blue";
                    bullet_position[i][0] = -5;
                }else {
                    div_element.style.background = "pink";
                    bullet_position[i][0] = x;
                    console.log("x is decreased."+x);
                }
            }else {
                id_name = "grid"+x+"_"+y;
                div_element = document.getElementById(id_name);
                div_element.style.background = "blue";
                bullet_position[i][0] = -5;
            }
        }
    }
}