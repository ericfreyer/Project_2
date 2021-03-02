$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $("#profileName").text(data.username);
  });

//   $('#yourDivName').prepend('yourtHTML');

// <form id="cms">
// 					<div class="form-group">
// 						<label for="title">Title:</label>
// 						<input placeholder="Post Title" type="text" class="form-control" id="title">
// 						<br />
// 						<label for="body">Body:</label>
// 						<textarea placeholder="Post Body" class="form-control" rows="10" id="body"></textarea>
// 						<div class="form-group">
// 							<label for="category">Select Author:</label>
// 							<select class="custom-select" id="author">
//   						</select>
// 						</div>
// 						<br />
// 						<button type="submit" class="btn btn-success submit">Submit</button>
// 					</div>
// 				</form>


});
