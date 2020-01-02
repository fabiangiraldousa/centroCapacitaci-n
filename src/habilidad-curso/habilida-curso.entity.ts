import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Curso } from 'src/curso/curso.entity';
import { Habilidad } from 'src/habilidad/habilidad.entity';

@Entity()
export class HabilidadCurso {

    @PrimaryGeneratedColumn()
    id: bigint;

    @OneToOne(type=>Curso)
    @JoinColumn()
    curso:Curso;

    @OneToOne(type=>Habilidad)
    @JoinColumn()
    habilidad:Habilidad;
}