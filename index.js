import { input } from '@inquirer/prompts'; //using the inquirer npm pkg

const answer = await input({message: 'Enter link:'}); 
    //using the input method from inquirer module. the input is taken after 
    // sending out a message and using the await function- it waits for the function or part of code to be run
var userLink; // creating a variable to store the userdata.

import * as fs from "fs"; //using the filesystem(fs) module

await fs.promises.writeFile("userdata.txt", answer, (err) => {//fs.writefile is used to create a file. await and promises keywords are used. The await operator is used to wait for a Promise and get its fulfillment value.
        //The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.  
    if(err) throw err; //throws error if any.
    console.log("file is saved");
});

userLink = await fs.promises.readFile("userdata.txt", 'utf-8'); //the userLink variable is used to store the userdata by reading it using the fs method fs.readfile. Here, again, we use the await and promise as the file has to be read only when the file is created and the data can be stored only once the operation is completed.
console.log(userLink);


import qr from 'qr-image'; //using the qr-image module to generate an image.

var qr_svg = qr.image(userLink, { type: 'png' }); //using the qr.image method to generate a QR of the dat 'userLink' with the type of image to be generated
qr_svg.pipe(fs.createWriteStream(`${userLink}.png`)); //we are creating a new file using createWriteStream and storing the QR there from qr_svg using the .pipe method. We are saving the file from a variable for later use and sharing, and not to lose it if it stays as a variable.
                                                      //createWriteStream is used for larger amounts of data and is faster compared to .writefile
var svg_string = qr.imageSync(userLink, { type: 'png' }); //we are also storing the qr in a special text format. This can be used to embed into html or css or any text-based requiremeent.