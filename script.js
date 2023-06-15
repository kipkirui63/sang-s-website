document.getElementById("hello").addEventListener("click", function() {
    alert("Portfolio downloaded!");
  });
  
  document.getElementById("contact").addEventListener("click", function() {
    alert("Go to contact page.");
  });
  
  document.getElementById("action").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var name = document.querySelector('input[type="text"]').value;
    var phoneNumber = document.querySelector('input[type="phone-number"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var comment = document.getElementById("comment").value;
  
    if (name === "" || phoneNumber === "" || email === "" || comment === "") {
      alert("Please fill in all the fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Response received!");
    }
  });
  
  function validateEmail(email) {
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }
  