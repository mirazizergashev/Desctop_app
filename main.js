const {spawn} = require('child_process');

function sum(a=0,b=0,c=0,cb) {
    const python = spawn('python', ["python/main.py",'sum',a,b,c],{});

    python.stdout.on('data', (data) => {

        cb(null,{msg:data.toString()*1})

    })
   
    python.stderr.on("data",data=>{
        cb({status:501,msg:data.toString()},null)
    })
    
}

function divide(a=1,b=1,cb) {
    const python = spawn('python', ["python/main.py",'divide',a,b],{});

    python.stdout.on('data', (data) => {

        cb(null,{msg:data.toString()*1})

    })
   
    python.stderr.on("data",data=>{
        cb({status:501,msg:data.toString()},null)
    })
    
}

function kopaytirish(a=1,b=1,c=1,d=1,cb) {
    const python = spawn('python', ["python/main.py",'kopaytir',a,b,c,d],{});

    python.stdout.on('data', (data) => {

        cb(null,{msg:data.toString()*1})

    })
   
    python.stderr.on("data",data=>{
        cb({status:501,msg:data.toString()},null)
    })
    
}

function ayir(a=1,b=1,cb) {
    const python = spawn('python', ["python/main.py",'ayir',a,b],{});

    python.stdout.on('data', (data) => {

        cb(null,{msg:data.toString()*1})

    })
   
    python.stderr.on("data",data=>{
        cb({status:501,msg:data.toString()},null)
    })
    
}



module.exports={sum,divide,kopaytirish,ayir}