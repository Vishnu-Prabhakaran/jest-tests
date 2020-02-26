// Api tests
// fetch() in node will not work in node, there is no such thing as a window object in node
// Instead we use a library called node-fetch

const fetch = require('node-fetch');

// Dependency injection
// Promise version
const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return {
        count: data.count,
        results: data.results
      };
    });
};

// Async await version

const getPeople = async fetch => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json();
  //console.log(data);
  return {
    count: data.count,
    results: data.results
  };
};

//getPeople(fetch);
module.exports = {
  getPeople,
  getPeoplePromise
};
