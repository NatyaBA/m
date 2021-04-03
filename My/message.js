document.getElementById("clear").onclick = function() {
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textarea").value = "";
    document.getElementById("website").value = "";
}

var modal = document.getElementById("my_modal");
var btn = document.getElementById("form_id");
var span = document.getElementsByClassName("close_modal_window")[0];



 function validate(formy, email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[formy].elements[email].value;

    if (reg.test(address) == false) {
         alert('Enter the correct e-mail');
         return false;
    }
}

btn.onclick = validate;
btn.addEventListener('click', () => {
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
});
   
    

      
  
  

