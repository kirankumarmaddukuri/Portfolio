function validateForm() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") 
    {
    alert("Name must be filled out");
    return false;
  }

  
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

 
  if (message == "") 
    {
    alert("Message must be filled out");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}


document.forms[0].onsubmit = function() {
  return validateForm();
};
