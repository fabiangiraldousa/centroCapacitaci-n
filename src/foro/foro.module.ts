import { Module } from '@nestjs/common';
import { ForoController } from './foro.controller';
import { ForoService } from './foro.service';
import { Foro } from './foro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Foro])],
  controllers: [ForoController],
  providers: [ForoService]
})
export class ForoModule {}
