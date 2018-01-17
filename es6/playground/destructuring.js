const person = {
  name: 'Adam',
  age: 24,
  location: {
    city: 'Cracow',
    temp: 0
  }
}

const {city: bestCity, temp: temperature = "Not available"} = person.location;
if (bestCity && typeof temperature === 'number') {
  console.log(`I am from ${bestCity} and the temp is ${temperature}`);
}

  console.log(`I am from ${bestCity} and the temp is ${temperature}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`The publisher name is ${publisherName}`);

const address = ['1229 Juniper Street','US',];

const [street, country, city = 'NYC'] = address;

console.log(`I am living in ${city}`);
