import { Router, Response, Request} from 'express';
import { PostService } from '../services/post.service'; //importing the created service

export class PostController{
    public router: Router;
    private postService: PostService;

    constructor(){
        this.router = Router();
        this.postService = new PostService(); //creating the new instance of the PostService
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        res.send(this.postService.index()); //index method of postservice will execute
    }

    public create(req: Request, res: Response){
        res.send(this.postService.create()); //create method of postservice will execute
    }

    public update(req: Request, res: Response){
        res.send(this.postService.update()); //update method of postservice will execute
    }

    public delete(req: Request, res: Response){
        res.send(this.postService.delete()); //delete method of postservice will execute
    }

    /*
        Configuring the routes of the controller
    */
   public routes(){
       this.router.get('/', this.index);
       this.router.post('/', this.create);
       this.router.put('/:id', this.update);
       this.router.delete('/:id', this.delete);
   }
}