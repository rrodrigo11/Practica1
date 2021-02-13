var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-02-13&' +
          'sortBy=popularity&' +
          'apiKey=0d727f25d6c14c6db8f401844e5315e5';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })