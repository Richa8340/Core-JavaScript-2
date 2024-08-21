/** 3. Create a Map to store contact information (name, age, email, location) and implement a function to
retrieve contact details by name.  */




const contacts = new Map();


contacts.set('John Doe', {
  age: 30,
  email: 'johndoe@example.com',
  location: 'New York',
});

contacts.set('Jane Smith', {
  age: 25,
  email: 'janesmith@example.com',
  location: 'London',
});

contacts.set('Michael Johnson', {
  age: 35,
  email: 'michaeljohnson@example.com',
  location: 'Sydney',
});


function getContactDetails(name) {
  if (contacts.has(name)) {
    return contacts.get(name);
  } else {
    return 'Contact not found.';
  }
}




const contactName = 'Jane Smith';
const contactDetails = getContactDetails(contactName);

console.log(`Details for ${contactName}:`, contactDetails);


const unknownContact = 'Alice Brown';
const unknownContactDetails = getContactDetails(unknownContact);

console.log(`Details for ${unknownContact}:`, unknownContactDetails);



/** output   == 
 * Sorted ages: [
  19, 19, 20, 22, 24,
  24, 24, 25, 25, 26
]
Min age: 19
Max age: 26
Median age: 24
Average age: 22.8
07
07
Difference between max and average: 3.1999999999999993 */
