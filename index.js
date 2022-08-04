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
      name: "linkedin_URL",
      type: "input",
      message: "What is your LinkedIn URL?",
    },
    {
      name: "github_URL",
      type: "input",
      message: "What is your GitHub URL?",
    },
  ])
  .then((answer) => {
    console.log(
      "Hello",
      answer.first_name,
      "Location",
      answer.location,
      "Bio",
      answer.bio,
      "LinkedIn",
      answer.linkedin_URL,
      "GitHub",
      answer.github_URL
    );
  });
