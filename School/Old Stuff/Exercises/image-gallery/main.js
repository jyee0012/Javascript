/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

*/
document.querySelectorAll('.image-links li a').forEach(function(element) {
    element.addEventListener('click', function (evt) { 
        evt.preventDefault(); 
        document.querySelector('img').src = element.href; 
    } )
}, this);