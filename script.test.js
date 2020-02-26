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

it ('work with undefined and null input' , () => {
    // If we get an undefined input from the user we want to return an empty array
    expect(googleSearch('undefined', dbMock)).toEqual([]);
    expect(googleSearch('null', dbMock)).toEqual([]);
})

it ('it does not return more than 3 matches' , () => {
    // If we get 3 results back
    expect(googleSearch('.com', dbMock).length).toEqual(3);
    //expect(googleSearch('null', dbMock)).toEqual([]);
})