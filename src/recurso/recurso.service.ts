import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Recurso } from './recurso.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RecursoRepositorio } from './recurso.repository';

@Injectable()
export class RecursoService extends TypeOrmCrudService<Recurso> {
    constructor( 
        @InjectRepository(Recurso) repositorio,
        private customRepository:RecursoRepositorio
      ) {
        super(repositorio);
      }

    getRecursoEspecifico(id:number):Promise<any[]>{
        return this.customRepository.getRecurso(id);
    }  
}
