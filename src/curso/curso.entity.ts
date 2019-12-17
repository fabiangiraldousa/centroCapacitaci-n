  
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuario/usuario.entity';

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
}