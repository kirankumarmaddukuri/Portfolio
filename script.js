document.addEventListener('DOMContentLoaded', function() 
{
  document.querySelector('form').addEventListener('submit', function(event) 
  {
    event.preventDefault(); 

    
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="Meassage"]').value;

    let valid = true;

   
    if (name.trim() === "") {
      alert("Please enter your name.");
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      alert("Please enter your email.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      valid = false;
    }

    
    if (message.trim() === "") {
      alert("Please enter your message.");
      valid = false;
    }

    
    if (valid) {
      this.submit();
    }
  });
});
