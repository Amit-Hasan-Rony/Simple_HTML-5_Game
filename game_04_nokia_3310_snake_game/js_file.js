var game_div = document.getElementsByClassName("play_game")[0];
var snake_indexs = [[0,2],[0,1],[0,0]];
var apple_index = [-5,-6];
var snake_direction = 1;
var apple_flag = true;
var total_point = 0;
var game_interval = null;


setup_grid();
game_interval = setInterval("game_start()",500);
function game_start(){
    if(apple_flag==true){
        generate_apple();
        apple_flag = false;
    }
    let head_before_i = snake_indexs[0][0];
    let head_before_j = snake_indexs[0][1];
    if(snake_direction==1){
        head_before_j++;
    }else if(snake_direction==2){
        head_before_i--;
    }else if(snake_direction==3){
        head_before_j--;
    }else if(snake_direction==4){
        head_before_i++;
    }
    color_the_snake();
    if(snake_collusion(head_before_i,head_before_j)==1){
        console.log("game over");
        clearInterval(game_interval);
    }else if(snake_collusion(head_before_i,head_before_j)==2){
        total_point++;
        let apple_grid ="grid"+apple_index[0]+"_"+apple_index[1];
        let apple_div = document.getElementById(apple_grid);
        apple_div.style.background = "blue";
        apple_flag = true;
        let point_id = document.getElementById("score_id");
        point_id.innerHTML = parseInt(total_point);
    }else if(snake_collusion(head_before_i,head_before_j)==0){
    }
    let tail_index = snake_indexs.pop();
    let tail_div_id = "grid"+tail_index[0]+"_"+tail_index[1];
    let tail_div = document.getElementById(tail_div_id);
    tail_div.style.background = "blue";
    snake_indexs.unshift([head_before_i,head_before_j]);
}

function snake_collusion(newi,newj){
    for(let i=0;i<3;i++){
        let x = snake_indexs[i][0];
        let y = snake_indexs[i][1];
        if(newi == x && newj == y)
            return 1;
    }
    if(newi >= 15 || newj >=15 || newi<0 || newj<0)
        return 1;
    
    if(newi == apple_index[0] && newj == apple_index[1]){
        return 2;
    }
    return 0;
}

function color_the_snake(){
    for(let i=0;i<3;i++){
        let id_name = "grid"+snake_indexs[i][0]+ "_" +snake_indexs[i][1];
        let div_element = document.getElementById(id_name);
        div_element.style.background = "black";
    }
}

function generate_apple(){
    let positioni = (Math.floor(Math.random()*100)) % 15;
    let positionj = (Math.floor(Math.random()*100)) % 15;
    apple_index[0] = positioni;
    apple_index[1] = positionj;
    let id_name = "grid"+positioni+ "_" + positionj;
    let div_element = document.getElementById(id_name);
    div_element.style.background = "darkmagenta";
}

function setup_grid(){
    for(let i=0;i<15;i++){
        for(let j=0;j<15;j++){
            let div_element = document.createElement("div");
            div_element.setAttribute("style","width:20px;height:20px;background:blue;");
            let id_name = "grid" + i +"_" + j ;
            div_element.setAttribute("id",id_name);
            game_div.appendChild(div_element);
        }
    }
}

document.addEventListener("keyup",keyfunction);

function keyfunction(e){
    if(e.keyCode === 39){
        snake_direction = 1;
    }else if(e.keyCode === 38){
        snake_direction = 2;
    }else if(e.keyCode === 37){
        snake_direction = 3;
    }else if(e.keyCode === 40){
        snake_direction = 4;
    }
}