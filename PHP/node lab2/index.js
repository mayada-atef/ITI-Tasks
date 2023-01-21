const express = require("express");
const fs = require("fs"); 
const hbs = require("hbs");
const path = require("path");
const viewPath = path.join(__dirname, "./views");
const app = express();
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", viewPath);
app.get("/", (req, res) => {
   res.send("success")
})
app.get("/user/all", (req, res) => {
    fs.readFile("./user.json", { encoding: 'utf-8' },
     (err,users) => {
         if (!err) {
             users = JSON.parse(users);
            // res.send(JSON.parse(users));
            res.render("showallusers",{users})
         }
        else {
            res.send("error");
         }
    });  
})
app.get("/user/show/:id", (req, res) => {
    let id = req.params.id
    let data = JSON.parse(fs.readFileSync("./user.json", { encoding: 'utf-8' }));    
    let user = data.find(element => element.id = id);
    res.render("showuser",{ user });
})
app.post("/user/add", (req, res) => {
    let data =JSON.parse(fs.readFileSync("./user.json", { encoding: 'utf-8' })); 
    id = Date.now();
    let user = { ...req.body, id };
    data.push(user);
    fs.writeFileSync('./user.json', JSON.stringify(data));
    res.send(user);
})
app.delete("/user/delete/:id", (req, res) => {
    let id=req.params.id
    let data =JSON.parse(fs.readFileSync("./user.json", { encoding: 'utf-8' })); 
    data=data.filter((ele) => { return ele.id != id });
    fs.writeFileSync('./user.json', JSON.stringify(data));
    res.send(data);
})
app.put("/user/edit/:id", (req, res) => {
    let id = req.params.id
    let data = JSON.parse(fs.readFileSync("./user.json", { encoding: 'utf-8' }));    
    let index = data.findIndex(element => element.id = id);
    let updatedUser = { ...req.body, id: data[index]['id'] };
    data[index] = updatedUser;
    fs.writeFileSync('./user.json', JSON.stringify(data));
    res.send(data);
})

app.listen(7000,()=>{console.log("server up: http://localhost:7000")});

