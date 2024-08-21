/** 4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function. */




const person1 = {
    name: 'Alice',
    age: 28
  };
  
  const person2 = {
    name: 'Bob',
    age: 34
  };
  
 
  function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
  
  
  introduce.call(person2);
  

  introduce.call(person1);


  /** output
   * Hello, I'm Bob, and I'm 34 years old.               
Hello, I'm Alice, and I'm 28 years old.
   */
  