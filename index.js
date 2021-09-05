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
	])
	.then(answers => {
		const readme = `
# Welcome to ${answers.title} 👋
		
## Description
${answers.description}

## Install
\`${answers.installation}\`
		`;

		fs.writeFile("README.md", readme, err => {
			if (err) {
				throw err;
			}
			console.log("Successfully wrote to README.md");
		});
	});
