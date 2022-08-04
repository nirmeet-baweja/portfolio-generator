const fs = require("fs");

const writeHTMLTemplate = (filename, htmlTemplate) => {
  fs.writeFile(`${filename}.html`, htmlTemplate, (err) =>
    err ? console.log(err) : console.log("Your input was written to the page!")
  );
};
