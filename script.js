document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("feedbackForm").style.display = "none";
  document.getElementById("thanksMessage").style.display = "block";
});
