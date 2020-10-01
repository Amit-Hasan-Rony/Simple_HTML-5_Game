var image_name_and_location=[
    {
        name: "background",
        location : "images/background.jpg",
    },
    {
        name: "mole",
        location: "images/mole.jpg",
    }
];
var game_div = document.getElementsByClassName("play_game")[0];
var clicked_index = null;
var random_index = null;
var total_point = 0;
var total_time_counted = -1;

var myGame = setInterval(game_start_function,1000);


function random_number_generation_function(){
    let grid_number = (Math.floor(Math.random()*100)) % 9;
    let id_name = image_name_and_location[0].name + grid_number;
    return id_name;
}

function game_start_function(){
    total_time_counted++;
    image_setup_function();
    let random_id_name = random_number_generation_function();
    let len = random_id_name.length;
    random_index = parseInt(random_id_name.slice(len-1,len));
    let id_name = document.getElementById(random_id_name);
    id_name.setAttribute("src",image_name_and_location[1].location);
}

function image_setup_function(){
    if(total_time_counted==0){
        for(let i=0;i<9;i++){
            let img = document.createElement("img");
            img.setAttribute("src",image_name_and_location[0].location);
            let id_name = image_name_and_location[0].name + i ;
            img.setAttribute("id",id_name);
            if(i>2)
                img.setAttribute("style","margin-top: 20px;");
            img.setAttribute("onclick","click_function(this)");
            game_div.appendChild(img);
        }
    }else {
        for(let i=0;i<9;i++){
            let id_name = image_name_and_location[0].name + i ;
            let image_element = document.getElementById(id_name);
            image_element.src = image_name_and_location[0].location;
        }
    }
    document.getElementById("remaining_time").innerHTML = (60-total_time_counted);
    if(total_time_counted==60){
        clearInterval(myGame);
    }
}

function click_function(obj){
    clicked_index = null;
    let id_name = obj.getAttribute("id");
    let len = id_name.length;
    clicked_index = parseInt(id_name.slice(len-1,len));
    wait_flag = true;

    if(random_index == clicked_index){
        total_point = total_point + 1 ;
        console.log("You got a point.");
        document.getElementById("score").innerHTML = total_point;
    }
    else 
        console.log("You missed.");
}