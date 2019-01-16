const fs = require('fs');
const path = process.cwd();

data = [
    {
        "id"          : "1",
        "fname"       : "Jun",
        "lname"       : "Doe"
    },
    {
        "id"          : "2",
        "fname"       : "Jay",
        "lname"       : "Doe"
    },
    {
        "id"          : "3",
        "fname"       : "Mochi",
        "lname"       : "Doe"
    },
    {
        "id"          : "4",
        "fname"       : "Aki",
        "lname"       : "Doe"
    }
]

fs.writeFile(path+"/api/data/clientinformations.json", JSON.stringify(data), function(err) {
    if(err) return console.log(err);
    console.log("The file was saved!");
});