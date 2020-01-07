  
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Modulo } from 'src/modulo/modulo.entity';
import { AreaConocimiento } from 'src/area-conocimiento/area-conocimiento.entity';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  nombre: string;

  @Column("text")
  descripcion:string;
  
  @Column()
  thubmnail:string;

  @Column()
  precio:string;

  @Column()
  calificacion:string;

  @ManyToOne(type=>AreaConocimiento,AreaConocimiento=>AreaConocimiento.cursos)
  areaConocimiento:AreaConocimiento;
  
  @OneToMany(type=>Modulo,Modulo=>Modulo.curso)
  modulos:Modulo[];

}