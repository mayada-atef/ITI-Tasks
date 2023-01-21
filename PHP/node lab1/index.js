const yargs=require('yargs');
const fs=require('fs');
yargs.command({
    command:"add new user",
    builder: {
        id:{},
        name: {},
        email: {},
        
    },
    handler: function (argv) {
        let fileContent = JSON.parse(fs.readFileSync('user.json'));
        
        let user = {
            id: Date.now(),
            name: argv.name,
            email:argv.email   
        }
        fileContent.push(user);
        fs.writeFileSync('user.json',JSON.stringify(fileContent))
    }
})
yargs.command({
    command:"show user",
    builder: {
      id:{}
    },
    handler: function (argv) {
        let fileContent = JSON.parse(fs.readFileSync('user.json'));
        fileContent.forEach(element => {
            if (element.id == argv.id) {
                console.log(element);
            }
        });
    }
})
yargs.command({
    command:"delete user",
    builder: {
      id:{}
    },
    handler: function (argv) {
        let fileContent = JSON.parse(fs.readFileSync('user.json'));
        let i=0
        fileContent.forEach(element => {
            if (element.id == argv.id) {
                console.log(element);
                fileContent.splice(i, 1);
            }
            i++;
        });
        fs.writeFileSync('user.json',JSON.stringify(fileContent))
    }
    
})
yargs.command({
    command:"edit user",
    builder: {
        id: {},
        name: {},
        email:{}
    },
    handler: function (argv) {
        let fileContent = JSON.parse(fs.readFileSync('user.json'));
        fileContent.forEach(element => {
            if (element.id == argv.id) {
                console.log(element);
                element.name = argv.name;
                element.email = argv.email;
                console.log(element);
            }
        });
        fs.writeFileSync('user.json',JSON.stringify(fileContent))
    }
    
})

yargs.argv