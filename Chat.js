var userButton=document.getElementById("user-button");
var agentButton=document.getElementById("agent-button")
var messageTyped=document.getElementById("typed-message");
var chatContainer=document.querySelector("div.chat-container");


messageTyped.addEventListener("keyup",e=>{
    if(e.keyCode===13){
        let gotMessage=messageTyped.value;
    let createdUserElement=document.createElement('div');
    createdUserElement.className="message-container";
    createdUserElement.innerText=gotMessage;
    createdUserElement.id="right";
    chatContainer.append(createdUserElement);
    messageTyped.value="";
    }
})

agentButton.addEventListener("click",()=>{
    let gotMessage=messageTyped.value;
    let createdUserElement=document.createElement('div');
    createdUserElement.className="message-container";
    createdUserElement.innerText=gotMessage;
    createdUserElement.id="left";
    chatContainer.append(createdUserElement);
    messageTyped.value="";
})