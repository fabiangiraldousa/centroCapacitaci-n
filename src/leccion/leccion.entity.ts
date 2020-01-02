import { Column, Entity, PrimaryGeneratedColumn,ManyToOne, OneToMany } from 'typeorm';
import { Modulo } from 'src/modulo/modulo.entity';
import { Recurso } from 'src/recurso/recurso.entity';

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
    gratuita:boolean;

    @ManyToOne(type=>Modulo, Modulo=>Modulo.id)
    modulo:Modulo;

    @OneToMany(type => Recurso, Recurso => Recurso.id)
    recursos:Recurso[];
}