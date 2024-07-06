<script>
function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (message == "") {
    alert("Message must be filled out");
    return false;
  }

  return true;
}
</script>