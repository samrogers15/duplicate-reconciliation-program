![GitHub Last Commit](https://img.shields.io/github/last-commit/samrogers15/duplicate-reconciliation-program?style=plastic)
![GitHub Repo Size](https://img.shields.io/github/repo-size/samrogers15/duplicate-reconciliation-program?style=plastic)
![GitHub Followers](https://img.shields.io/github/followers/samrogers15?style=social)
![GitHub](https://img.shields.io/github/languages/top/samrogers15/duplicate-reconciliation-program?style=plastic)


# Duplicate Reconciliation Program
> This is a repository for a duplicate reconciliation program. When initiated, this program searches through an Array of Objects and removes duplicate entries based on specific properties that should not have duplicates. In addition to outputting a new Array without duplicates, this program also logs the duplicate entries that were removed from the original Array along with timestamps.


## Table of contents
* [Application Instructions](#application-instructions)
* [Testing Instructions](#testing-instructions)
* [Technologies and Sources](#technologies-and-sources)
* [Screen Shots](#screen-shots)
* [Code Snippets](#code-snippets)
* [Contact](#contact)


## Application Instructions
This program is written in JavaScript and uses Node.js to create a command-line application that removes duplicate entries from an Array. Additionally, it also uses two NPM packages: Winston (to log the duplicate entries removed from the Array) and Mocha (a testing framework to ensure the functions are written and operating properly).

To run this program:

1. Clone repository to your local computer and open repository in preferred code editor (this program was written using Visual Studio Code).
2. Initialize the NPM packages using the below protocol:
    * `npm install` - sets up program for local development and downloads required dependencies (in the case of this program, NPM Mocha and NPM Winston)
3. Open an integrated terminal and run `node deduplicateLeads.js`
    * The program will initiate and remove duplicate entries from the `leads.json` file housed in the `Inputs` folder
    * The program will output the de-duplicated array to the `output.json` file housed in the `Outputs` folder
    <br>
    ***Please note, if there are objects in the array with identical dates, the data from the record provided last in the list will be preferred***
    * A log of the changes will be generated with a filename of `duplicateEntries.log` so duplicate entries that were removed can be viewed and tracked.


## Testing Instructions
This program also includes a testing framework created with the Mocha.js NPM dependency. In order to test the functions created, follow the below protocol:

1. Open a terminal and run `npm test`.
2. The tests will run and output will be generated in the terminal.


## Technologies and Sources
* [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
* [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
* [![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
* [![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)](https://mochajs.org/)
* [Winston](https://www.npmjs.com/package/winston)


## Screen Shots
Testing Framework

![Mocha Test](/assets/MochaTest.png)

Program Output

![Deduplicator Program](/assets/DeduplicatorProgram.png)


## Code Snippets

deduplicateLeads function:
```js
const deduplicateLeads = (array) => {
  return array
    .slice()
    .reverse()
    .filter((value, index, arr) => {
      const duplicateEmail =
        arr.findIndex((t) => t.email === value.email) === index;
      const duplicateID = arr.findIndex((t) => t._id === value._id) === index;
      if (duplicateID === false) {
        writeLog(arr[index], "ID", arr[index]._id);
      } else if (duplicateEmail === false) {
        writeLog(arr[index], "Email", arr[index].email);
      } else {
        return true;
      }
    });
};
```


## Contact
Created by Sam Rogers - feel free to contact me to collaborate on a project!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuelerogers/)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samrogers15)

[![GMail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:samrogers15@gmail.com)

[Sam Rogers Dev](www.samrogersdev.com)