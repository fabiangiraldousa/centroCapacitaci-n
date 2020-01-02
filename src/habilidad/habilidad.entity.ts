import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Habilidad {

    @PrimaryGeneratedColumn()
    id: bigint;
    
    @Column()
    nombre:string;

}