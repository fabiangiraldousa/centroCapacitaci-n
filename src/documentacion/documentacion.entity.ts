import { Column, Entity, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { Leccion } from 'src/leccion/leccion.entity';

@Entity()
export class Documentacion{

    @PrimaryGeneratedColumn()
    id: bigint;

    @Column()
    nombre: string;

    @Column()
    ruta:string;

    @ManyToOne(type=>Leccion, Leccion=>Leccion.id)
    leccion:Leccion;
}  