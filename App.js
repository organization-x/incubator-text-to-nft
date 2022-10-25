//Import express.js module and create its variable.
const express=require('express');
const app=express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

//Import PythonShell module.
const {PythonShell} =require('python-shell');

app.post("/post", (req, res, next)=>{
    console.log(" POST REQUEST");
    console.log(req.body);

    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
          scriptPath: 'D:\\AICamp\\Fall-Incubator\\Tutorials\\node-server', //If you are having python_test.py script in same folder, then it's optional.
        args: ['pass-the-promt-and-other-variables'] //An argument which can be accessed in the script using sys.argv[1]
    };


    PythonShell.run('my_script.py', options, function (err, result){
          if (err) throw err;

          console.log('result: ', result.toString());
    });
    // We will have to respond with the URL of the generated image.
    res.redirect("/MVP")
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const port= process.env.PORT || 8000;
app.listen(port, ()=>console.log(`Server connected to ${port}`));