import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Curso } from 'src/curso/curso.entity';
import { Leccion } from 'src/leccion/leccion.entity';

@Entity()
export class Modulo {
    @PrimaryGeneratedColumn()
    id: bigint;
  
    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    descripcion_long: string;

    @ManyToOne(type=>Curso,Curso=>Curso.id)
    curso:Curso;

    @OneToMany(type=>Leccion,Leccion=>Leccion.modulo)
    lecciones:Leccion[];
  }