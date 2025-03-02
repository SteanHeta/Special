function greetUser() {
    const greetingElement = document.createElement('div');
    const currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12) {
        greetingText = 'Good morning';
    }else if (currentHour < 18) {
        greetingText = 'Good afternoon';
    }else {
        greetingText = 'Good evening';
    }
    greetingElement.innerText = greetingText
    greetingElement.style.textAlign = 'center';
    greetingElement.style.fontSize = '24px';

    document.body.insertBefore(greetingElement, document.body.firstChild);
}
greetUser()

document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.hoverable');
    headings.forEach(function(heading) {
        heading.addEventListener('mouseover' ,function() {
            heading.style.backgroundColor ="#f0c3c3"; // Light red
        });
        heading.addEventListener('mouseout',function(){
            heading.style.backgroundColor ="";
        });
    });
});