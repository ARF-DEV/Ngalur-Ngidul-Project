const socket = io()

socket.on('message', (text) => {
    const newline = document.createElement('li');
    newline.innerHTML = text;
    document.querySelector('#messages').appendChild(newline);
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('#input').value;
    document.querySelector('#input').value = ''
    console.log(text);
    socket.emit('message', text )
}