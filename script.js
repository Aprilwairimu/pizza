$(document).ready(function () {
  $(".card-body").click(function () {
    $(this).next("div").slideToggle("slow");
  });
});

var checkout = document.getElementById("submitButton");

function invoice() {
  // Setting size and sizePrice based on selection
  checkout.addEventListener("click", function (event) {
    // event.preventDefault();
    var size = document.querySelector('input[name="rate"]:checked').value;
    console.log(size);
  });
}


function addRate() {
  var rate = document.getElementsByName("rate");
  for (i = 0; i < rate.length; i++) {
    if (rate[i].checked) {
      rateValue = document.getElementById("result").innerHTML = parseInt(
        rate[i].value
      );
    }
  }
}

  var size = document.querySelector('input[name="size"]:checked').value;
  console.log(size);
  var sizePrice = 0;
  if (size === "small") {
    sizePrice = 1000;
  }
  if (size === "Medium") {
    sizePrice = 4000;
  }
  if (size === "Large") {
    sizePrice = 8000;
  }
}