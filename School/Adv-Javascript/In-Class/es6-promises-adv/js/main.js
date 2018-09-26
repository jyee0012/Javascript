/**
 * Send an AJAX request and return the result parsed as a JSON object
 * @param {string} url - The URL for the desired resource.
 * @returns {Promise} Promise represents the parsed JSON  
 */
const fetchJSON = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (evt) => {
            switch (xhr.status) {
                case 200:
                    try {
                        resolve(JSON.parse(xhr.response));
                    } catch (err) {
                        let e = new Error(`Could not parse result: ${err}.`);
                        reject(e);
                    }
                    break;
                default:
                    reject(`Error retrieving user data: ${xhr.status} - ${xhr.statusText}.`);
            }
        });
        xhr.addEventListener('error', (evt) => {
            reject('Error retrieving user data.');
        });

        xhr.open('get', url);

        xhr.send(null);
    });

};

// Now we can use the fetchJSON() to fetch any JSON we like, and since it's a Promise, we can
// chain the calls together via next().
document.querySelector('.btn-primary').addEventListener('click', () => {
    fetchJSON('user.json')
    .then(user => { document.querySelector('.user').innerHTML = `User: ${user.name}`; })
    .then(() => fetchJSON('friends.json'))
    .then(friends => {document.querySelector('.friends').innerHTML = `#Friends: ${friends.length}`})
    .then(() => fetchJSON('posts.json'))
    .then(posts => {document.querySelector('.posts').innerHTML = `First Post: ${posts[0].title}`})
    .catch(err => {
        document.querySelector('.output').innerHTML = err;
    });
});