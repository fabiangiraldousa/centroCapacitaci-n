import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AreaConocimiento {

    @PrimaryGeneratedColumn()
    id: bigint;
    
    @Column()
    nombre:string;

}