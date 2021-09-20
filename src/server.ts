import ''
import express, {Request, Response} from 'express';
import { createConnection } from 'typeorm';
import { PostController } from './controller/post.controller'; //importing the post controller

class Server{
    private app: express.Application;
    private postController: PostController;

    constructor(){
        this.app = express();
        this.configuration();
        this.postController = new PostController(); //creating the new instance of the controller
        this.routes();
    }

    // method to configure the server
    public configuration(){
        this.app.set('port', process.env.PORT || 3000); //default port is 3000
    }

    // Method to configure the routes 
    public async routes(){
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "meet",
            password: "admin",
            database: "api1",
            entities: ["build/database/entities/**/*.js"],
            synchronize: true,
            name: "subject"
        });

        this.postController = new PostController();

        //configuring the new routes of the controller post
        this.app.use('/api/subjects/', this.postController.router); 
        
        this.app.get("/", (req:Request, res:Response)=>{
            res.send("Welcome to the subject management service!");
        })
    }

    // following start method is used to start the server
    public start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server is listening on port ${this.app.get('port')}.`);
        })
    }
}

const server = new Server(); //creating the object of the Server class
server.start(); //starting the server