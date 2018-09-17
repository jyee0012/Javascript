const action = document.querySelector('.btn');
const output = document.querySelector('.output');

action.addEventListener('click', function (evt){
    let d = new Date();

    //output.innerHTML = 'The current date is:' + d.toLocaleString();
    output.innerHTML = `The current date is: ${d.toLocaleString()}`;
});