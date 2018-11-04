const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.onload = () => console.log(request.responseText);
request.send();