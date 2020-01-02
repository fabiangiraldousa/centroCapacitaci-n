import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Habilidad } from './habilidad.entity';

@Injectable()
export class HabilidadService extends TypeOrmCrudService<Habilidad> {
    constructor( @InjectRepository(Habilidad) repo) {
        super(repo);
      }
}
