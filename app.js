// const fs = require('fs');

const inquirer = require("inquirer")

// const generatePage = require('./src/page-template.js');


// const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;
// cont pageHTML = generatePage(portfolioData);
 
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i +=1) {
//         console.log(profileDataArr[i])
//     }

//     console.log('================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs); 

// arguments - file created (output file), data that is being written (html string) and error 
// fs.writeFile('./index.html', generatePage(name,github), err => {
//     if(err) throw new Error (err);

//     // success message 
//     console.log("Portfolio complete! Check out index.html to see the output!");
// });

inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));