/**
 * Objective:
 * Fix issues and optimize to run in O(n) time complexity
 *
 * Gets the first Five occurring English alphabet letters of a name.
 *
 * @param {string} name - The input name.
 * @returns {string} - The first Five occurring English alphabet letters of the name, in uppercase.
 *
 * @example
 * name = "Issac Newton"
 * output = "ISSAC"
 *
 * name = "J8#4Jamey"
 * output = "JJAMEY"
 *
 * name = "A. Jamey"
 * output = "AJAME"
 */
function getFirstFiveOccurringAlphabetLettersOfName(name) {
  return name
    .split("")
    .filter((s) => !!s && !new RegExp("[0-9]").test(s))
    .slice(0, 5)
    .map((s) => s[0].toUpperCase())
    .join("");
}

const usernames = [
  "007 Agent",
  "J-Doe",
  "M.Jane",
  "Alice & Bob",
  "M&Mrs. Johnson",
  "John, Jr.",
];

usernames.forEach((username) => {
  console.log(
    `First five letter of ${username}: `,
    getFirstFiveOccurringAlphabetLettersOfName(username)
  );
});
