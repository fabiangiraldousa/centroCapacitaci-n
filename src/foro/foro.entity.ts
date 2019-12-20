import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Curso } from 'src/curso/curso.entity';

@Entity()
export class Foro{

    @PrimaryGeneratedColumn()
    id: bigint;

    @OneToOne(type=>Curso)
    @JoinColumn()
    curso:Curso;
}