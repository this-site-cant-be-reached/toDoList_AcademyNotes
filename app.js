//requiring 2 packages : express and body-parser
const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname+"/date.js"); //this is a module that export a function from the file date.js that obtain the current date xD

const items = ["Buy Food","Cook Food","Eat Food"];
const workItems = [];  
 // --- REMEMBER THAT THE CONST IN JAVASCRIPT COULD CHANGE HIS CONTENT BUT NOT REASIGN AS A NEW TYPE OF THE SAME VARIABLE... LIKE REDECLARE THE ARRAY IN THIS CASE XD
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs"); // this is mandatory to the engine of ejs to be rendered xD

app.get("/", function(req,res){
   
  // here put getdate
   
  const day = date.getDate(); // this function returns the current day from de require(__dirname+/date.js); where it has that function that we have created xD
                           //remember that the "." and after the function is one of the functions that we have in our module date.js created

    res.render("list", { listTitle: day, newListItems: items}); // the "render" will look to the folder views/list.ejs and the other parameter will be an object declared in that file called kindOfDay
});


app.post("/", function(req,res){
    
    const item = req.body.newItem;
 //this "list" is the name of the button in the form ... 
 //when it is pressed it has a scriplet that evaluate the value of that button here and which listTitle is it about
  //it seems that it takes from the value the first strings until a space and set taht as the name
  //this is a hypotesis cause the value  when listTitle is Work List is "Work" xD   
  if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work"); //AND THIS IS GONNA RENDER TO THE METHOD get("/work") declared below xD
    }else{
        items.push(item);
        res.redirect("/");
    }
    
    
})

app.get("/work", function(req,res){
   res.render("list", {listTitle:"Work List" , newListItems : workItems });
})

app.post("/work", function(req,res){
    
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");  

});

app.get("/about",function(req,res){
  
    res.render("about");
 
});



app.listen(3000, function(){
   console.log("Server started on port 3000.");
});