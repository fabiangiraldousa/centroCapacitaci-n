import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Documentacion } from './documentacion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocumentacionService  extends TypeOrmCrudService<Documentacion>{
    constructor( @InjectRepository(Documentacion) repo) {
        super(repo);
      }
}
