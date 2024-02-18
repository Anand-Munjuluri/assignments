const fs = require('fs')

function writeToFile(filename,content){
    fs.writeFile(filename,content,'utf-8',(err)=>
    {
        console.log(`Written to ${filename}` )


    let results=0;
    for(let i=0;i<0;i++){
        results=+i;
    }
    console.log(results)
    }
    
    )
    
}

const filename = './a.txt'
const content = 'BE lenoda BE lenoda BE lenoda'

writeToFile(filename,content)
