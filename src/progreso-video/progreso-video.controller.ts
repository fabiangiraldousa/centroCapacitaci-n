import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProgresoVideo } from './progreso-video.entity';
import { ProgresoVideoService } from './progreso-video.service';

@Crud({
    model: {
      type: ProgresoVideo,
    },
  })
@Controller('progreso-video')
export class ProgresoVideoController {
  constructor(public service: ProgresoVideoService){}
}
