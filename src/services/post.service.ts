import { getConnection } from "typeorm";
import { SubjectRepository } from "../repository/subject.repository";

export class PostService{
    private subjectRepository: SubjectRepository;

    constructor(){
        this.subjectRepository = getConnection("subject").getCustomRepository(SubjectRepository);
    }

    public index = async () => {
        const subjects = await this.subjectRepository.find();
        return subjects;
    }

    public create = () => {
        return "Create from service";
    }

    public update = () => {
        return "Update from service";
    }

    public delete = () => {
        return "Delete from service";
    }
}