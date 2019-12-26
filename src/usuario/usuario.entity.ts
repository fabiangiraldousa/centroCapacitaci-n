  
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { text } from 'express';
import { type } from 'os';
import { Curso } from 'src/curso/curso.entity';

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

  @OneToMany(type=>Curso,Curso=>Curso.usuario)
  cursos:Curso[];
}