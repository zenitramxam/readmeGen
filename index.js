const inquirer= require('inquirer');
const fs= require('fs');

const generateReadMe= (response) =>
    `# ${response.title}

    ## Description
    ${response.description}
        
    ## Table of Contents
        
    * [Installation](#installation)
        
    * [Usage](#usage)
        
    * [Contributors](#contribute)
        
    * [Test](#test)
        
    * [License](#license)
        
    ## Installation
    ${response.installation}
        
    ## Usage
    ${response.usage}
    
    ## License
    ${response.license}
        
    ## Contributors
    ${response.contribute}
        
    ## Test
    ${response.test}
        
    ## Questions
        
    GitHub: https://github.com/${response.github}
        
    Email: ${response.email}
    `;

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions on how to use your application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can other developers contribute to your project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide any test written for your application.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', 'GNU License', 'N/a'],
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your Email?',
        name: 'email',
    },
])
  