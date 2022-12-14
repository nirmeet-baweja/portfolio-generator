const fs = require("fs");

const writeHTMLTemplate = (filename, htmlTemplate) => {
  fs.writeFile(`${filename}.html`, htmlTemplate, (err) =>
    err ? console.log(err) : console.log("Your input was written to the page!")
  );
};
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is your first name?",
    },
    {
      name: "location",
      type: "input",
      message: "Where are you based?",
    },
    {
      name: "bio",
      type: "input",
      message: "Please share a short bio about yourself.",
    },
    {
      name: "linkedinUrl",
      type: "input",
      message: "What is your LinkedIn URL?",
    },
    {
      name: "githubUrl",
      type: "input",
      message: "What is your GitHub URL?",
    },
  ])
  .then((answer) => {
    const htmlTemplate = generateTemplate(answer);
    writeHTMLTemplate(answer.first_name, htmlTemplate);
  });
const generateTemplate = (answer) => {
  const portfolioTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project: Portfolio Generator</title>
</head>
<body>
    <h1 id="fullName">${answer.first_name}</h1>
    <p id="locCityCountry">${answer.location}</p>
    <p id="bioGitHub">${answer.bio}</p>
    <h2>Personal Links</h2>
    <ul>
        <li><a id="urlLinkedIn" href="">${answer.linkedinUrl}</a></li>
        <li><a id="urlGitHub" href="">${answer.githubUrl}</a></li>
    </ul>
</body>
</html>`;
  return portfolioTemplate;
};
