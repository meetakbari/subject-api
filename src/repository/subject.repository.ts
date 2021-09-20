import { EntityRepository, Repository } from 'typeorm';
import { SubjectEntity } from '../database/entities/subject.entity';

@EntityRepository(SubjectEntity)
export class SubjectRepository extends Repository<SubjectEntity> {

}