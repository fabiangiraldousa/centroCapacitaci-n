import { Module } from '@nestjs/common';
import { LeccionService } from './leccion.service';
import { LeccionController } from './leccion.controller';
import { Leccion } from './leccion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ TypeOrmModule.forFeature([Leccion])],
  providers: [LeccionService],
  controllers: [LeccionController]
})
export class LeccionModule {}
