import { Injectable } from '@nestjs/common';
import { Comentario } from './comentario.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComentarioService  extends TypeOrmCrudService<Comentario>  {
    constructor( @InjectRepository(Comentario) repo) {
        super(repo);
      }
}
