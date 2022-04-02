const fs = require('fs');

fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000},', "utf-8", (err)=>{
    if(err){console.log(err)};
    console.log("Dosya Oluşturuldu");
})

fs.readFile("employees.json","utf-8",(err,data)=>{
    if(err){console.log(err)};
    console.log(data)
})


fs.appendFile("employees.json",'\n{"name": "Employee 2 Name", "salary": 5000},',(err)=>{
    if(err){console.log(err)};
    console.log("Dosya Güncellendi")
})


setTimeout(()=>{
    fs.unlink("employees.json" ,(err)=>{
    console.log(err)
    console.log("Dosya Silindi")
    })
},5000);

