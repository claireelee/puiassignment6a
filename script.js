//clicking "add to cart" increases the cart count by 1 
var j = 0;
function addCartClick() {
    document.getElementById('clickcount').innerHTML = "Cart" + " " + "(" + (++j) + ")";
}

// flavor container
var flavorContainer = document.getElementById("flavorselect");

// Get all buttons with class="btn" inside the container
var flavorSelections = flavorContainer.getElementsByClassName("selectionitem");

for (var i = 0; i < flavorSelections.length; i++) {
    flavorSelections[i].addEventListener("click", function() {
      var current = flavorContainer.getElementsByClassName("active");
  
      // If there's no active class to begin with
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
      document.getElementById('clickflavor').innerHTML = "Flavor: " + this.id;
    });
}

// glaze container
var glazeContainer = document.getElementById("glazeselect");

var glazeSelections = glazeContainer.getElementsByClassName("selectionitem");

for (var i = 0; i < glazeSelections.length; i++) {
    glazeSelections[i].addEventListener("click", function() {
      var current = glazeContainer.getElementsByClassName(" active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
      document.getElementById('clickglaze').innerHTML = "Glaze: " + this.id;
    });
}

// quantity container
var quantityContainer = document.getElementById("quantityselect");

var quantitySelections = quantityContainer.getElementsByClassName("selectionitem");

for (var i = 0; i < quantitySelections.length; i++) {
    quantitySelections[i].addEventListener("click", function() {
      var current = quantityContainer.getElementsByClassName(" active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
      document.getElementById('clickquantity').innerHTML = "Quantity: " + this.id;

      //determine item subtotal by quantity
      document.getElementById('clickprice').innerHTML = "Item Subtotal: $" + this.id + ".00";
    });
}


