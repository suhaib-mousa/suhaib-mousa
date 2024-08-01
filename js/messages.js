document.addEventListener("DOMContentLoaded", function(event) {
    let messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.display = 'block';
            setTimeout(() => {
                message.classList.add('bounceIn');
            }, 100); 
            if(index == messages.length - 1){
                var typingElement = document.getElementById('typing');
                typingElement.style.display = 'none';
            }
        }, index * 2000); // 2000ms delay for each message
    });
});
