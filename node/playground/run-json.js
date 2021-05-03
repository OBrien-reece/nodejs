const fs = require('fs');


const testBuffer = fs.readFileSync('run-json.json');
//console.log(testBuffer.toString());
const dataBuffer = testBuffer.toString()
const user = JSON.parse(dataBuffer); 
user.name = "OBrien EVance"
user.age = 54;

const userJSON = JSON.stringify(user);
//console.log(JSON.stringify(user))
fs.writeFileSync('run-json.json', userJSON)

//console.log(JSON.parse(newData).newAge)

//read the file
// const dataBuffer = fs.readFileSync('run-json.json');
// //convert data to string
// const dataJSON = dataBuffer.toString()
// //console.log(dataJSON);parse to object
// const data = JSON.parse(dataJSON);
// //access property
// console.log(data.title)

// const book = {
//     title: "Ego is the enemy",
//     author: "OBrien Reece"
// }


// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('run-json.json', bookJSON);


// //stringify takes in the json  object giving back a string
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// //parse takes strings from the stringify
// const bookParse = JSON.parse(bookJSON);
// console.log(bookParse.author);