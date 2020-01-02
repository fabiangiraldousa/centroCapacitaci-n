import { Module } from '@nestjs/common';
import { ProgresoVideoService } from './progreso-video.service';
import { ProgresoVideoController } from './progreso-video.controller';
import { ProgresoVideo } from './progreso-video.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProgresoVideo])],
  providers: [ProgresoVideoService],
  controllers: [ProgresoVideoController]
})
export class ProgresoVideoModule {}
