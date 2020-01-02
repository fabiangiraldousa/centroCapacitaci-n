import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Recurso } from './recurso.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecursoService extends TypeOrmCrudService<Recurso> {
    constructor( 
        @InjectRepository(Recurso) repositorio,
      ) {
        super(repositorio);
      }
}
