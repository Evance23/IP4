
var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function(){
    $("button.order now").click(function(event){
     let pname = $(".name option:selected").val();
     let psize = $("#size option:selected").val();
     let pcrust = $("#crust option:selected").val();
     let ptopping = [];
     $.each($("input[name='toppings']:checked"), function(){            
         ptopping.push($(this).val());
     });
     console.log(ptopping.join(", "));
     switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 12;
           console.log(price);
         break;
         case "medium":
           price = 7.5;
           console.log("The price is "+price);
         break;
         case "small":
           price = 5;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
        case "0":
          crust_price = 0;
        break;
        case "Cheese Stuffed":
          crust_price = 1.5;
        break;
        case "Flatbread":
          crust_price = 2;
        break;
        case "Neapolitan":
          crust_price = 2.5;
        break;
        default:
          console.log("No price"); 
      }
      let topping_value = ptopping.length*$1;
      console.log("toppins value" + topping_value);
      if((psize == "0") && (pcrust == "0")){
        console.log("nothing selected");
        $("button.order now").show();
        $("#information").show();
        $("div.choice").hide();
        alert("Please select pizza size and crust"); 
      }
      else{
        $("button.order now").hide();
        $("#information").hide();
        $("div.choice").slideDown(1000);
      }
  