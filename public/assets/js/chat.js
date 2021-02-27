const chatForm = document.getElementById("chat-form");
const chatMessage = document.querySelector(".msg_history");
const socket = io();

socket.on("message", message => {
  console.log(message);
  outputMessage(message);
  //scrolling to bottom auto

  chatMessage.scrollTop = chatMessage.scrollHeight;
});

chatForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log("iwork");

  const textmsg = e.target.elements.textmsg.value;
  socket.emit("chatMessage", textmsg);

  e.target.elements.textmsg.value = "";
  e.target.elements.textmsg.focus();
});

//Message to Page

//REFORMAT THIS TO FIT NEW HANDLEBARS
function outputMessage(message) {
  const div = document.createElement("div");
  div.innerHTML = `  <div class="incoming_msg">
  <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">
  </div>
  <div class="received_msg">
   <div class="received_withd_msg"> 
  <p>${message.text}</p>
  
  <span class="time_date"> ${message.username} at ${message.time}</span>
  </div>
  </div>
  </div>
 `;
  document.querySelector(".chat-messages").appendChild(div);
}
