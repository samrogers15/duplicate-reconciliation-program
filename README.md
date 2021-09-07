![GitHub Last Commit](https://img.shields.io/github/last-commit/samrogers15/duplicate-reconciliation-program?style=plastic)
![GitHub Repo Size](https://img.shields.io/github/repo-size/samrogers15/duplicate-reconciliation-program?style=plastic)
![GitHub Followers](https://img.shields.io/github/followers/samrogers15?style=social)
![GitHub](https://img.shields.io/github/languages/top/samrogers15/duplicate-reconciliation-program?style=plastic)


# Duplicate Reconciliation Program
> This is a repository for a duplicate reconciliation program. When initiated, this program searches through an Array and removes duplicate entries based on specific properties that should not have duplicates. In addition to outputting a new Array without duplicates, this program also logs the duplicate entries that were removed from the original Array along with timestamps.


## Table of contents
* [Application Instructions](#application-instructions)
* [Testing Instructions](#testing-instructions)
* [Technologies and Sources](#technologies-and-sources)
* [Screen Shot](#screen-shot)
* [Code Snippets](#code-snippets)
* [Contact](#contact)


## Application Instructions
This program is written in JavaScript and uses Node.js to create a command-line application that removes duplicate entries from an Array. Additionally, it also uses two NPM packages: Winston (to log the duplicate entries removed from the Array) and Mocha (a testing framework to ensure the functions are written and operating properly).

To run this program:

1. Clone repository to your local computer and open repository in preferred code editor (this program was written using Visual Studio Code).
2. Follow the below installation protocol:
    * `NPM init` - initialize Node
    * `NPM install` - set up for local development
    * `NPM i winston` - installs Winston dependency for logging changes
    * `NPM i --save-dev Mocha` - installs Mocha dependency for testing purposes
3. Open a terminal and run `node deduplicator.js`
    * The program will initiate and remove duplicate entries from the `leads.json` file housed in the `Inputs` folder and sort the Array based on the `Entry Date` field.
    * The program will output the de-duplicated array to the `output.json` file housed in the `Outputs` folder
    * A log of the changes will be generated with a filename of `duplicateentries.log` so duplicate entries that were removed can be viewed and tracked.


## Application Instructions
This program also includes a testing framework created with the Mocha.js NPM dependency. In order to test the functions created, follow the below protocol:
    1. Open a terminal and run `npm test`.
    2. The tests will run and output will be generated in the terminal.


## Technologies and Sources
* [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
* [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
* [![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
* [![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)](https://mochajs.org/)
* [Winston](https://www.npmjs.com/package/winston)


## Screen Shot
Testing Framework

![Mocha Test](/assets/MochaTest.png)

Program Output

![Deduplicator Program](/assets/DeduplicatorProgram.png)


## Code Snippets

sortDate function:
```js
function sortDate(a, b) {
  if (new Date(b.entryDate).getTime() === new Date(a.entryDate).getTime()) {
    return true;
  } else {
    return new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime();
  }
}
```

removeDupes function:
```js
function removeDupes(leads, prop) {
  return leads.filter((obj, pos, arr) => {
    if (
      (arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos) ===
      false
    ) {
      writeLog(arr[pos], prop);
    } else {
      return true;
    }
  });
}
```

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on a project!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuelerogers/)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samrogers15)

[![GMail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:samrogers15@gmail.com)

[Sam Rogers Dev](https://samrogers15.github.io/Current_Portfolio/index.html)