import { Controller } from '@nestjs/common';
import { VideoService } from './video.service';
import { Video } from './video.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
    model: {
      type: Video,
    },
  })
@Controller('video')
export class VideoController {
    constructor(public service:VideoService){}
}
