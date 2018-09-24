document.querySelector('.btn-primary').addEventListener('click', evt => {
    getUserData()
        .then(displayData)
        .catch((err) => {
                document.querySelector('.output').innerHTML = err; // : ${request.status} - ${request.statusText}
            });
});

const displayData = (data) => {
    let output = document.querySelector('.output');
    output.innerHTML = `User: ${data.name} / Age: ${data.age}`;

}


const getUserData = () => {
    return new Promise((resolve, reject) => {
        let data, 
            request = new XMLHttpRequest();

        request.addEventListener('load', () => {
            switch (request.status)
            {
                case 200:
                    resolve(JSON.parse(request.responseText));
                    break;
                default:
                reject('Error retrieving user data');
                    break;
            }
        });
        request.open("GET", 'user.json');
        request.send(null);
    });

};

