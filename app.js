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

// add function so that function can be invoked on demand within the flow of the app
const promptUser = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself'
    }
]);
};

const promptProject = portfolioData => {
    // if there's no "projects" array property, create one 
    if(!portfolioData.projects) {
    portfolioData.projects = []; 
    }

    console.log(`
=================
Add a New Project
=================
`);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you create this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject', 
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })

};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

