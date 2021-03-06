//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

var socket = new WebSocket('ws://127.0.0.1');

function sendText() {
	// makes a message object contianing the data needed to process the message
	var msg = {
		type: "message",
		text: document.getElementById("input").value,
		id: document.getElementById("user").value,
		date: Date.now()
	};

	//send the msg as a JSON-formatted string.
	socket.send(JSON.stringify(msg));

	//blank the text input element
	document.getElementById("text").value = "";
}

socket.onmessage = function(event) {
	var chatbox = document.getElementById("chatbox").contentDocument;
	var text = "";
	var msg = JSON.parse(event.data);
	time = new Date(msg.date);
	var timeStr = time.toLocaleTimeString();

	switch (msg.type) {
		case "id":
			clientID = 
	}
}
