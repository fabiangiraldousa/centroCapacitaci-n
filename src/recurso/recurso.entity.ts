import { Column, Entity, PrimaryGeneratedColumn,ManyToOne, OneToMany } from 'typeorm';
import { Leccion } from 'src/leccion/leccion.entity';

enum Tipo{
    Video="Video",
    CodigoFuente="CodigoFuente",
    Documentacion="Documentacion"
};

@Entity()
export class Recurso{

    @PrimaryGeneratedColumn()
    id: bigint;

    @Column()
    tipo: Tipo;

    @Column()
    meta_indice:string;

    @ManyToOne(type => Leccion, Leccion => Leccion.recursos)
    lecciones:Leccion;

}