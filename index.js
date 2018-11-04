// Declaring variables
const container = document.getElementById('container-json');


// Calling the API
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.onload = () => {
    const requestData = JSON.parse(request.responseText);
    console.log(requestData[0]);
    renderHTML(requestData);
}
request.send();

// Rendering API data into the DOM
function renderHTML(data) {
    const htmlContent = data
        .map((contact) => {
        return `
            <div class="item">
                <h2>${contact.name}</h2>
                <ul>
                    <li>Email: ${contact.email}</li>
                    <li>Username: ${contact.username}</li>
                    <li>Website: ${contact.website}</li>
                    <li>Catchphrase: ${contact.company.catchPhrase}</li>
                </ul>
            </div>

        `;
    }).join('');
    container.innerHTML = htmlContent;
};

