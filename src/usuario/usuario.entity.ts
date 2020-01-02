  
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Rol {
    Administrador = 'Administrador',
    Docente = 'Docente',
    Usuario = 'Usuario'
  }

@Entity('usuario')
export class Usuario {

  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  nombre: string;

  @Column()
  email:string;
  
  @Column()
  num_celular:string;

  @Column('text')
  rol:Rol;

  @Column('text')
  password:string;

  @Column()
  thumbnail:string;

  @Column('date')
  fecha_nacimiento:Date;

  @Column()
  social_profile:string;
}