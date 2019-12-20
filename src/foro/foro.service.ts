import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Foro } from './foro.entity';

@Injectable()
export class ForoService extends TypeOrmCrudService<Foro> {
    constructor( @InjectRepository(Foro) repo) {
        super(repo);
      }
}
