import { Column, Entity, PrimaryGeneratedColumn,ManyToOne, OneToMany } from 'typeorm';
import { Modulo } from 'src/modulo/modulo.entity';
import { Documentacion } from 'src/documentacion/documentacion.entity';

@Entity()
export class Leccion{

    @PrimaryGeneratedColumn()
    id: bigint;

    @Column()
    nombre: string;

    @Column()
    descripcion:string;

    @Column()
    orden:number;

    @Column()
    video:string;

    @Column()
    duracion:number;

    @ManyToOne(type=>Modulo, Modulo=>Modulo.id)
    modulo:Modulo;

    @OneToMany(type=>Documentacion,Documentacion=>Documentacion.leccion)
    documentos:Documentacion;
}