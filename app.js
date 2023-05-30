const express = require("express");
const os = require("os");
const app =  express();

app.get("/", (request, response) =>{
    return response
        .status(200)
        .json({
            message:"Olá"
        });
});

app.get("/liveness", (request, response) =>{
    return response
        .status(200)
        .json({
            message:"Olá Meu App está Vivo",
            path: process.cwd(),
            gid: process.getegid(),
            uid: process.geteuid(),
            date: new Date().getTime()
        });
});

app.get("/readiness", (request, response) =>{
    return response
        .status(200)
        .json({
            message:"Olá Meu App está Pronto",
            platform: os.platform(),
            freemem: os.freemem(),
            homedir: os.homedir(),
            date: new Date().getTime()

            
        });
});


module.exports = app;