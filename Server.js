const express =  require("express")

const app = express();

app.get("/check", (req, res) =>{ //get the data
    res.send("Welcome Santanu Paikaray")
})
app.post("/", (req, res) =>{ //post request - Post data to your server
    res.send("Welcome Santanu Paikaray")
})
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server listening at port ${PORT}`)
    
})

