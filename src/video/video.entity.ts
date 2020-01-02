  
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Rol {
    Administrador = 'Administrador',
    Docente = 'Docente',
    Usuario = 'Usuario'
  }

@Entity()
export class Video {

  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  url: string;

  @Column()
  duracion:number;
  
}