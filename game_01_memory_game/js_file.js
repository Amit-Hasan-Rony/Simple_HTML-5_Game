var image_name_and_location = [
    {
        name: "burger",
        location: "images/burger.jpg",
    },
    {
        name: "pizza",
        location: "images/pizza.jpg",
    },
    {
        name: "chicken_fry",
        location: "images/chicken_fry.jpg",
    },
    {
        name: "hot_dog",
        location: "images/hot_dog.jpg",
    },
    {
        name: "sanduis",
        location: "images/sanduis.jpg",
    },
    {
        name: "cold_drink",
        location: "images/cold_drink.jpg",
    },
    {
        name: "card",
        location: "images/card.jpg",
    },
    {
        name: "empty",
        location: "images/empty.jpg",
    }
];

var ara_random_check=[0,0,0,0,0,0,0,0,0,0,0,0];
var random_index=[];
for(let i=0;i<12;){
    let random_number = (Math.floor(Math.random()*100))%6;
    let flag=1;
    if(ara_random_check[random_number]<2){
        ara_random_check[random_number]++;
        let string_name_with_number = image_name_and_location[random_number].name + ara_random_check[random_number];
        random_index.push(string_name_with_number);
        i++;
    }
}

var game_div = document.getElementsByClassName("game_div")[0];
for(let i=0;i<12;i++){
    let temp_img = document.createElement("img");
    temp_img.setAttribute("src",image_name_and_location[6].location);
    temp_img.setAttribute("onclick","function_image_called(this)");
    temp_img.setAttribute("id",random_index[i]);
    game_div.appendChild(temp_img);
}

var number_of_time_image_function_called = 0;
var check_ara=[-5,-5];
var previous_two_object=[null,null];
var initial_score = 0;
var check_which_is_clicked_before_ara=[0,0,0,0,0,0,0,0,0,0,0,0,0];

function function_image_called(obj){
    let id_name = obj.getAttribute("id");
    let len = id_name.length;
    let id_name_without_number = id_name.slice(0,len-1);
    var index = image_name_and_location.findIndex(function(item, i){
        return item.name === id_name_without_number;
      });
    let just_check_index = random_index.indexOf(id_name);
    if(check_which_is_clicked_before_ara[just_check_index]==0){
        number_of_time_image_function_called++;
        if(number_of_time_image_function_called % 2 ==1 && number_of_time_image_function_called!=1){
            previous_two_object[0].setAttribute("src",image_name_and_location[7].location);
            previous_two_object[1].setAttribute("src",image_name_and_location[7].location);
        }
        
        obj.setAttribute("src",image_name_and_location[index].location);
        if(number_of_time_image_function_called % 2 ==0){
            check_ara[1]=id_name_without_number;
            previous_two_object[1]=obj;
            result_check_function();
        }else {
            check_ara[0]=id_name_without_number;
            previous_two_object[0]=obj;
        }
        check_which_is_clicked_before_ara[just_check_index]=1;
    }
}

function result_check_function(){
    if(!check_ara[0].localeCompare(check_ara[1])){
        initial_score = initial_score + 10 ;
        let string_score = ""+initial_score;
        document.getElementById("score_id").innerHTML = string_score;
    }
}
