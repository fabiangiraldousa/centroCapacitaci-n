import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Video } from './video.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VideoService extends TypeOrmCrudService<Video> {
    constructor(@InjectRepository(Video) repo) {
        super(repo);
      }
}
