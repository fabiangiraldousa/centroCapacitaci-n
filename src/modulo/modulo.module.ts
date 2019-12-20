import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuloController } from './modulo.controller';
import { ModuloService } from './modulo.service';
import { Modulo } from './modulo.entity';
import { ModuloRespositorio } from './modulo.respository';

@Module({
  imports: [
      TypeOrmModule.forFeature([Modulo]),
      TypeOrmModule.forFeature([ModuloRespositorio]),
      ],  
  controllers: [ModuloController],
  providers: [ModuloService]
})
export class ModuloModule {}
