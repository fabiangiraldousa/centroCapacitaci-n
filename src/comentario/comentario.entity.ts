import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Foro } from 'src/foro/foro.entity';
import { Usuario } from 'src/usuario/usuario.entity';

@Entity()
export class Comentario {

    @PrimaryGeneratedColumn()
    id: bigint;
    
    @Column()
    texto:string;

    @Column()
    fecha:Date;

    @Column()
    calificacion:number;

    @OneToOne(type=>Foro)
    @JoinColumn()
    foro:Foro;

    @OneToOne(type=>Usuario)
    @JoinColumn()
    usuario:Usuario;


}