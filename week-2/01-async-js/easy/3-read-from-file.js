const fs = require("fs");
function readAndPrint(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
        console.log(data);


    let result = 0;
    for (let i = 0; i < 9999999999; i++) {
        result += i;
    }
    console.log(result);
    });
}
readAndPrint('./3-read-from-file.md');

   