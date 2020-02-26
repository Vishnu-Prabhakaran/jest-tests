const fetch = require('node-fetch');
const swapi = require('./script2');
// https://github.com/sapegin/jest-cheat-sheet

// // First method
// it('calls swapi to get people', done => {
//   // Tool use for test expect.assertions
//   expect.assertions(1);
//   swapi.getPeople(fetch).then(data => {
//     expect(data.count).toEqual(87);
//     // Dont finish the test once its fails, so we use done() to make sure the tests are complete
//     done();
//   });
// });

// Second method- without done()
it('calls swapi to get people', () => {
  // Tool use for test expect.assertions
  // Use assertions for all async await
  expect.assertions(1);
  // one assertions (expect)
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    // console.log(data.results);
    // 2 assertions (expect)
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// MOCK
it('getPeople return count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );
  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
