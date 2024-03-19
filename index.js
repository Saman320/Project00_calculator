#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("Lets Start Calculation"));
console.log(chalk.green(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "Secondnumber" },
    {
        message: "Select one of the operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.Secondnumber);
}
else {
    console.log("Please select valid operator");
}
