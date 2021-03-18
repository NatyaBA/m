document.getElementById("clear").onclick = function() {
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textarea").value = "";
    document.getElementById("website").value = "";
}

var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];


 function validate(form_id, email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;

    if (reg.test(address) == false) {
         alert('Enter the correct e-mail');
         return false;
    }
    else {
        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }   
    }
}
btn.onclick = validate;



      
  
  

