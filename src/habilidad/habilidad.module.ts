import { Module } from '@nestjs/common';
import { HabilidadService } from './habilidad.service';
import { HabilidadController } from './habilidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habilidad } from './habilidad.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Habilidad])],
  providers: [HabilidadService],
  controllers: [HabilidadController]
})
export class HabilidadModule {}
