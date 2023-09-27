const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Please enter your name: ')
} while(!name)

var n=document.querySelector('#naambatao')
n.innerHTML=name;




textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})
//var userlist=[];
function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    //userlist.add(msg);
    //console(userlist);
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)
   

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')
    if(type=='outgoing'){
        var nametobedisplayed="You"
    }
    else
    nametobedisplayed=msg.user
    let markup = `
        <h4>${nametobedisplayed}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}
