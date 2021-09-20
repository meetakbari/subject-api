import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subject')
export class SubjectEntity{

    constructor(){   
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    credit: number;

    @Column()
    intake: number;

    @Column()
    faculty_name: string;

    @Column()
    faculty_email: string;

    @Column()
    ta_name: string;

    @Column()
    ta_email: string;
}