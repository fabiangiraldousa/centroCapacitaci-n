import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Comentario } from './comentario.entity';
import { ComentarioService } from './comentario.service';

@Crud({
    model: {
      type: Comentario,
    },
  })
@Controller('comentario')
export class ComentarioController {
  constructor(public service:ComentarioService){}
}
