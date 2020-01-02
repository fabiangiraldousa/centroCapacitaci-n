import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Curso } from 'src/curso/curso.entity';

@Entity()
export class AreaConocimiento {

    @PrimaryGeneratedColumn()
    id: bigint;
    
    @Column()
    nombre:string;

    @OneToMany(type=>Curso,curso=>curso.areaConocimiento)
    cursos:Curso[];
}