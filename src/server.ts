import app from "./app";
import config from "./config";

function server(){
    const port = config.PORT;
    app.listen(port, ()=>{
        console.log(`server is running on ${port}`);
    })
}
server();