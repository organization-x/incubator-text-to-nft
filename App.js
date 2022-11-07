//Import express.js module and create its variable.
const express=require('express');
const app=express();
const cors = require('cors')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())
//Import PythonShell module.
const {PythonShell} =require('python-shell');
app.post("/api_old", (req, res, next)=>{
  console.log("POST REQUEST Received");
  // console.log(req.body);
  promptforsys = req.body;
  console.log(promptforsys);
  console.log("backend called");
  // let options = {
  //     mode: 'text',
  //     pythonOptions: ['-u'], // get print results in real-time
  //     // scriptPath: '/Users/adityav/Downloads/GitHub/incubator-text-to-nft/mint.py', //If you are having python_test.py script in same folder, then it's optional.
  //     args: [keyforsys, addressforsys] //An argument which can be accessed in the script using sys.argv[1]
  // };

  // PythonShell.run('mint.py', options, function (err, result){
  //       if (err) throw err;
  // });
  // We will have to respond with the URL of the generated image.
  res.redirect("/MVP")
});
app.post("/api", (req, res, next)=>{
    console.log("POST REQUEST in api");
    // console.log(req.body);
    addressforsys = req.body.address;
    keyforsys = req.body.key;
    console.log(addressforsys);
    console.log(keyforsys);
    console.log(promptforsys)
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        // scriptPath: '/Users/adityav/Downloads/GitHub/incubator-text-to-nft/mint.py', //If you are having python_test.py script in same folder, then it's optional.
        args: [addressforsys, promptforsys, keyforsys] //An argument which can be accessed in the script using sys.argv[1]
    };

    PythonShell.run('NFTMint.py', options, function (err, result){
          if (err) throw err;
    });
	console.log("Python script called!")
    // We will have to respond with the URL of the generated image.
    res.redirect("/MVP")
});

app.get("/get", (req, res, next)=>{
    console.log(" GET REQUEST RECEIVED");
    // We will have to respond with the URL of the generated image.
});

app.post("/Promptpost", (req, res, next)=>{
  // console.log(req.body);
    addressforsys = req.body.address;
    keyforsys = req.body.key;
  promptforsys = req.body.prompt;
  console.log(promptforsys, keyforsys, addressforsys);
  console.log("backend called with the prompt");
  
//    let options = {
//        mode: 'text',
//        pythonOptions: ['-u'], // get print results in real-time
        // scriptPath: '/Users/adityav/Downloads/GitHub/incubator-text-to-nft/mint.py', //If you are having py>
//        args: [addressforsys, promptforsys, keyforsys] //An argument which can be accessed in the script using>
//    };

 //   PythonShell.run('NFTMint.py', options, function (err, result){
 //         if (err) throw err;
 //   });
  console.log("Redirecting to MVP page");
  res.redirect("/MVP")
});


//Creates the server on default port 8000 and can be accessed through localhost:8000
const port= process.env.PORT || 8000;
app.listen(port, ()=>console.log(`Server connected to ${port}`));
