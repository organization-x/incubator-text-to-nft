//Import express.js module and create its variable.
const express=require('express');
const app=express();
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { PythonShell } from 'python-shell';
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
let promptforsys: any = "";
//Import PythonShell module.
app.post("/Promptpost", (req :any, res :any, next :any)=>{
  
  console.log("POST REQUEST");
  // console.log(req.body);
  let promptforsys: any = req.body.prompt;
  console.log(promptforsys);

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
app.post("/Walletpost", (req :any, res :any, next :any)=>{
    console.log("POST REQUEST");
    // console.log(req.body);
    let addressforsys: any = req.body.address;
    const RPC_URL = "https://rpc.testnet.fantom.network/"
    console.log(addressforsys);
    const sdk = new ThirdwebSDK(RPC_URL);
    const contractAddress = await sdk.deployer.deployNFTCollection({
      name: "My Collection",
      primary_sale_recipient: "your-address",
    });
  //   const contractsarray: any = sdk.getContractList(addressforsys);
  //  contractsarray.then(contractsarray => console.log(contractsarray));


    // let keyforsys: any = req.body.key;
    // console.log(keyforsys);

    // let options :any = {
    //     mode: 'text',
    //     pythonOptions: ['-u'], // get print results in real-time
    //     // scriptPath: '/Users/adityav/Downloads/GitHub/incubator-text-to-nft/mint.py', //If you are having python_test.py script in same folder, then it's optional.
    //     args: [addressforsys, promptforsys, keyforsys] //An argument which can be accessed in the script using sys.argv[1]
    // };

    // PythonShell.run('NFTMint.py', options, function (err :any, result :any){
    //       if (err) throw err;
    // });
    // We will have to respond with the URL of the generated image.
    res.redirect("/MVP")
});

//Creates the server on default port 8000 and can be accessed through localhost:8000
const port= process.env.PORT || 8000;
app.listen(port, ()=>console.log(`Server connected to ${port}`));