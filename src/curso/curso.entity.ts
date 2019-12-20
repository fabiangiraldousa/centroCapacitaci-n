  
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Usuario } from 'src/usuario/usuario.entity';
import { Modulo } from 'src/modulo/modulo.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  nombre: string;

  @Column()
  descripcion:string;
  
  @Column()
  thubmnail:string;

  @ManyToOne(type=>Usuario,Usuario=>Usuario.id)
  usuario:Usuario;
  
  @OneToMany(type=>Modulo,Modulo=>Modulo.curso)
  modulos:Modulo[];

}