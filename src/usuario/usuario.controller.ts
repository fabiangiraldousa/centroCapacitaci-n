import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Crud({
  model: {
    type: Usuario,
  },
})
@Controller('usuario')
export class UsuarioController {
  constructor(public service: UsuarioService) {}
}