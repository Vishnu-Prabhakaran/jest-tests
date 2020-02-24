const googleSearch = require('./script');

// Database mock
dbMock = ['dog.com', 'cheespuff.com', 'disney.com', 'dogpictures'];

it('this is a test', () => {
  // console.log(googleSearch)
  // googleSearch('testtest', dbMock)
  expect('hello').toBe('hello');
});

// passed
it('Is searching google', () => {
  // console.log(googleSearch)
  // googleSearch('testtest', dbMock)
  expect(googleSearch('testtest', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures']);
});
