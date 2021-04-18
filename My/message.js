document.getElementById("clear").onclick = function() {
    document.getElementById("textName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textarea").value = "";
    document.getElementById("website").value = "";
}

var modal = document.getElementById("my_modal");
var btn = document.getElementById("form_id");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.addEventListener('click', () => {

        btn.onclick = function () {
            var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var address = document.forms["formy"].elements["email"].value;
            var pattern1 = /^[a-zA-Z]+$/;
            var pattern2 = /[a-z]+/;
            var address1 = document.forms["formy"].elements["textName"].value;
            var address2 = document.forms["formy"].elements["textarea"].value;
        
            if (pattern1.test(address1) == false || document.getElementById("textName").value == "") {
                 alert('Enter the correct FIO');
            }
            else
                if (pattern.test(address) == false || document.getElementById("email").value == "") {
                    alert('Enter the correct e-mail');
                }
                else
                    if (pattern2.test(address2) == false || document.getElementById("textarea").value == "") {
                        alert('Enter the correct message');
                        return false;
                    }
                    else
                        modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
            document.forms[0].submit();
        }

});
   

      
  
  

