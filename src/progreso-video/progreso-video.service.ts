import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProgresoVideo } from './progreso-video.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProgresoVideoService extends TypeOrmCrudService<ProgresoVideo> {
    constructor(@InjectRepository(ProgresoVideo) repo) {
        super(repo);
      }
}
