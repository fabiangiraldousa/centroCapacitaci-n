import { Module } from '@nestjs/common';
import { AreaConocimientoService } from './area-conocimiento.service';
import { AreaConocimientoController } from './area-conocimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaConocimiento } from './area-conocimiento.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AreaConocimiento])],
  providers: [AreaConocimientoService],
  controllers: [AreaConocimientoController]
})
export class AreaConocimientoModule {}
