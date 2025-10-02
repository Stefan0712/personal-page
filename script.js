function openModal(targetId){
    closeEverything();
    const targetDiv = document.getElementById(targetId);
    targetDiv.classList.add('show-modal');
}
function closeModal(targetId){
    const targetDiv = document.getElementById(targetId);
    targetDiv.classList.remove('show-modal');
}
function closeEverything(){
    document.getElementById('mail').classList.remove('show-modal');
    document.getElementById('phone').classList.remove('show-modal');
    document.getElementById('share').classList.remove('show-modal');
}
function copyText(text) {
    // Clipboard API
    navigator.clipboard.writeText(text)
    .then(() => {
        addNotification('Text copied to clipboard!');
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
}
function addNotification(text){
    const container = document.getElementById('notifications');
    
    const message = document.createElement('p');
    message.innerText = text;
    const id = `message-${text}`;
    message.setAttribute('id', id);
    message.setAttribute('onclick', `removeNotification(${id})`)

    container.appendChild(message);

    setTimeout(()=>{
        removeNotification(id);
    }, 1500)
};

function removeNotification(id){
    const message = document.getElementById(id);
    if(message){
        message.remove();
    }
}