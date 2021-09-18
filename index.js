const inquirer = require("inquirer");
const fs = require("fs");

inquirer
	.prompt([
		{
			type: "input",
			name: "title",
			message: "💡 What is the title of your readme?",
		},
		{
			type: "input",
			name: "description",
			message: "📄 What is the description of your project?",
		},
		{
			type: "input",
			name: "installation",
			message: "📦 What are the installation instructions?",
		},
		{
			type: "input",
			name: "running",
			message: "📦 What are the instructions to run your project?",
		}
	])
	.then(answers => {
		const readme = `
# Welcome to ${answers.title} 👋
		
## Description
${answers.description}

## Using the project

### Installation
\`${answers.installation}\`

### Running
\`${answers.running}\`
		`;

		fs.writeFile("README.md", readme, err => {
			if (err) {
				throw err;
			}
			console.log("Successfully wrote to README.md");
		});
	});
