const chatForm = document.getElementById("chat-form");
const socket = io();

socket.on("message", message => {
  console.log(message);
  outputMessage(message);
});

chatForm.addEventListener("submit", e => {
  e.preventDefault();

  const msg = e.target.elements.msg.value;
  socket.emit("chatMessage", msg);

  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

//Message to DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p> ${message.username} at ${message.time} </p>
    <p class ="text">
    ${message.text}
    </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}
