function sendMessage() {
const msg = document.getElementById('message').value;
if(msg.trim() === '') return;
const chat = document.getElementById('chat');
const div = document.createElement('div');
div.className = 'message';
div.innerText = '👤 Moi : ' + msg;
chat.appendChild(div);
document.getElementById('message').value = '';
chat.scrollTop = chat.scrollHeight;
}