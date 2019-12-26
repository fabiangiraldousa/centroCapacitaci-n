import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Usuario } from './usuario.entity';


@Injectable()
export class UsuarioService extends TypeOrmCrudService<Usuario> {
  constructor(@InjectRepository(Usuario) repo) {
    super(repo);
  }
}