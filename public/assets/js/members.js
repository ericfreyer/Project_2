$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  const signUpForm = $("form.bio");
  const bioInput = $("input#about-input");

  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      body: bioInput.val().trim()
    };
    console.log(bioInput.val().trim(), "this is the bio input");

    if (!userData.body) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.body);
    bioInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(body) {
    $.post("/api/signup", {
      body: body
    })
      .then(() => {
        window.location.replace("/api/posts");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    console.log(err);
  }

  $.get("/api/user_data").then(data => {
    $("#profileName").text(data.username);
  });

  $.get("/api/posts").then(data => {
    $("#aboutMe").text(data.body);
  });
  // console.log(data.body, "this is data.body");
});
