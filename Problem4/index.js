/**
 * Objective:
 * Fix bugs and expected output should be matching

 * Converts an array of file paths into a nested object representing the folder structure.
 * @param {string[]} filepaths - An array of file paths.
 * @returns {Object} - A nested object representing the folder structure.
 */

const convertToNestedObjects = (filepaths) => {
  let folderStructureObj = {};

  for (let name of filepaths) {
    const parts = name.split("/");
    parts.reverse();

    let currentFolderStructureObj = folderStructureObj;

    let fileName;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (i === parts.length - 2) {
        fileName = part;
        break;
      }

      currentFolderStructureObj[part] = currentFolderStructureObj[part] || {};
      currentFolderStructureObj = currentFolderStructureObj[part];
    }

    currentFolderStructureObj["files"] = [fileName];
    currentFolderStructureObj = folderStructureObj;
  }

  return folderStructureObj;
};

const giveFilepaths = [
  "home/user/documents/report1.docx",
  "home/user/documents/report2.docx",
  "home/user/photo1.jpg",
  "home/user/photo2.jpg",
  "home/user/code/script1.py",
  "home/user/code/script2.py",
  "home/user/documents/archive1.zip",
  "home/user/documents/archive2.zip",
];

const nestedObject = convertToNestedObjects(giveFilepaths);
console.log(JSON.stringify(nestedObject, null, 2));

// Expected output:
// {
//   home: {
//     user: {
//       documents: {
//         files: ["report1.docx", "report2.docx", "archive1.zip", "archive2.zip"],
//       },
//       files: ["photo1.jpg", "photo2.jpg"],
//       code: {
//         files: ["script1.py", "script2.py"],
//       },
//     },
//   },
// };
