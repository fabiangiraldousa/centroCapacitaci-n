import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Modulo } from './modulo.entity';
import { ModuloService } from './modulo.service';

@Crud({
    model: {
      type: Modulo,
    },
})

@Controller('modulo')
  export class ModuloController {
    constructor(public service: ModuloService) {}

  @Get('/curso/:id')
  getModulosCurso(@Param('id',ParseIntPipe) id:number){
    return this.service.getModulosCurso(id);
  }
}