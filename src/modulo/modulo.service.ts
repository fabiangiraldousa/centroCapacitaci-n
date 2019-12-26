import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Modulo } from './modulo.entity';
import { ModuloRespositorio } from './modulo.respository';

@Injectable()
export class ModuloService extends TypeOrmCrudService<Modulo> {
  constructor( 
    @InjectRepository(Modulo) repositorio,
    private customRepository:ModuloRespositorio
  ) {
    super(repositorio);
  }

  getModulosCurso(id:number):Promise<Modulo[]>{
    return this.customRepository.getModulosCurso(id);
  }

}
