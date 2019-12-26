import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Leccion } from './leccion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LeccionService  extends TypeOrmCrudService<Leccion>{
    constructor( 
        @InjectRepository(Leccion) repositorio,
      ) {
        super(repositorio);
      }
}
