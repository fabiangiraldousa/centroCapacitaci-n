import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AreaConocimiento } from './area-conocimiento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AreaConocimientoService extends TypeOrmCrudService<AreaConocimiento> {
    constructor( @InjectRepository(AreaConocimiento) repo) {
        super(repo);
      }
}
