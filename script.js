
var price, crust_price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

function totalPrice() {
  var price = document.getElementById('price').value;
  var quantity = document.getElementById('quantity').value;

  var total = price * quantity;

  alert(total);
}

$(document).ready(function () {

  $("#dent").submit(function (event) {
    event.preventDefault();

    $("button.order now").click(function (event) {
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));

      switch (psize) {
        case "0":
          price = 0;
          break;
        case "large":
          price = 12;
          console.log(price);
          break;
        case "medium":
          price = 7.5;
          console.log("The price is " + price);
          break;
        case "small":
          price = 5;
          console.log(price);
        default:
          console.log("error");
      }

      switch (pcrust) {
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

      let topping_value = ptopping.length * $1;
      console.log("toppins value" + topping_value);

      if ((psize == "0") && (pcrust == "0")) {
        console.log("nothing selected");
        $("button.order now").show();
        $("#information").show();
        $("div.choice").hide();
        alert("Please select pizza size and crust");
      }
      else {
        $("button.order now").hide();
        $("#information").hide();
        $("div.choice").slideDown(1000);
      }

      total = price + crust_price + topping_value;
      console.log(total);
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + total;
      $("#pizzaname").html($(".name option:selected").val());
      $("#pizzasize").html($("#size option:selected").val());
      $("#pizzacrust").html($("#crust option:selected").val());
      $("#pizzatopping").html(ptopping.join(", "));
      $("#totals").html(total);

      $("button.addPizza").click(function () {
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function () {
          ptopping.push($(this).val());
        });

        console.log(ptopping.join(", "));
        switch (psize) {
          case "0":
            price = 0;
            break;
          case "large":
            price = 12;
            console.log(price);
            break;
          case "medium":
            price = 7.5;
            console.log("The price is " + price);
            break;
          case "small":
            price = 5;
            console.log(price);
          default:
            console.log("error");
        }
        switch (pcrust) {
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
        let topping_value = ptopping.length * 50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
        var newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

        $("#ordersmade").append('<tr><td id="pizzaname">' + newOrder.name + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
        console.log(newOrder);


      });
      alert("Your Bill is $. " + checkoutTotal);
    });
  });
});