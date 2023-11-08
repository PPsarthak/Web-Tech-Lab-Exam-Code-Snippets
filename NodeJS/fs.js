const { log, error } = require("console");
const fs = require("fs");

/* READING FILE */
/*
console.log("Reading File Process");
//NodeJS is async and hence it can readFile async-ly
fs.readFile("helloWorld.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
})

console.log(
  "This text gets printed before reading file bcoz nodejs is non-blocking and uses multi-threading"
)

//if you want to read file synchronously
const fileContents = fs.readFileSync("./helloWorld.txt", "utf-8")
console.log(fileContents)

console.log(
  "This text gets printed after reading file bcoz here we are using synchronous process"
)
*/
/* WRITING FILE */
/*
//writing file := sync
fs.writeFileSync(
  "./helloWorld.txt", 
  "Writing in the file using NodeJS writeFileSync() function which is s")

//writing file := async 
fs.writeFile(
  "./helloWorld.txt",
  "Writing in the file using NodeJS writeFile() function which is async",
  (err)=>{
    if(err) console.error(err);
    else console.log("File has been overwritten successfully");
});
*/

/* APPENDING FILE */
/*
fs.appendFile("./helloWorld.txt", 
  "\nAppending some data to our original file", 
  (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Data appended to file successfully.');
  }
});
*/

/* READ DIRECRTORY */

//prints the list of files in the specified directory to the console
/*
fs.readdir(
  "D:\\WT_Codes\\PHP",
  (err, files) => {
    if(err) console.error(err);
    else{
      console.log("Files in the directory are: ");
      files.forEach((file, index) => {
        console.log(`${index+1}.${file}`);
      })
    }
  })

/* Stats of a file */
/*
fs.stat(
  "D:\\WT_Codes\\NodeJS\\helloWorld.txt", 
  (err, stats) => {
  if (err) {
    console.error('Error getting file stats:', err);
    return;
  }

  console.log('File information:');
  console.log('Size:', stats.size, 'bytes');
  console.log('Is Directory:', stats.isDirectory());
  console.log('Is File:', stats.isFile());
  console.log('Last Modified:', stats.mtime); 
  console.log('Created:', stats.birthtime); 
});
*/

/* MAKE DIRECTORY */
/*
fs.mkdir(
  "./tempDirectory", 
  { recursive: true },
  (err) => {
  if (err) {
    console.error('Error creating directory:', err);
  } else {
    console.log('Directory created successfully.');
  }
});
*/

/* RENAME DIRECTORY OR FILE */
/*
fs.rename(
  "./newTextFile.txt",
  "./helloWorld.txt",
  (err) => {
    if(err) console.error(err);
    else{
      console.log("Directory/File Renamed Successfully");
    }
  }
)
*/

/* REMOVE DIRECTORY */
/*
fs.rmdir(
  "./renamedTempDir",
  { recursive: true }, 
  (err) => {
  if (err)  console.error('Error removing directory:', err);
  else console.log('Directory removed successfully.');
  }
)
*/