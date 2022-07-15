function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }
  function demo(){
    var pincode = document.querySelector("#pincode").value;
    $.ajax({
        type: "GET",
        url :"" + pincode,
        sucess: function(response){
            alert(hello);
        }
    })
    alert(pincode);
  }

  $('#btnSubmit').removeAttr("disabled");