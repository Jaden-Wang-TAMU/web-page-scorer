const myStrings = require('./htmlScore');

myStrings.scoreRemote("https://en.wikipedia.org/wiki/2019_Cricket_World_Cup", "cricket")

var fs = require('fs');
fs.readFile('chicken.html', (err, data) => {
  if(err)
    throw err
  else{
    let myData=String(data)
    myStrings.scoreHTML(myData, "chicken")
  }
})
