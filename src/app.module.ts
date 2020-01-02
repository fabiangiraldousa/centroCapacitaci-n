import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { CursoModule } from './curso/curso.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ModuloModule } from './modulo/modulo.module';
import { LeccionModule } from './leccion/leccion.module';
import { DocumentacionModule } from './documentacion/documentacion.module';
import { ForoModule } from './foro/foro.module';
import { ComentarioModule } from './comentario/comentario.module';
import { AreaConocimientoModule } from './area-conocimiento/area-conocimiento.module';
import { HabilidadModule } from './habilidad/habilidad.module';
import { HabilidadCursoModule } from './habilidad-curso/habilidad-curso.module';
import { RecursoModule } from './recurso/recurso.module';
import { VideoModule } from './video/video.module';
import { ProgresoVideoModule } from './progreso-video/progreso-video.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsuarioModule,
    CursoModule,
    ModuloModule,
    LeccionModule,
    DocumentacionModule,
    ForoModule,
    ComentarioModule,
    AreaConocimientoModule,
    HabilidadModule,
    HabilidadCursoModule,
    RecursoModule,
    VideoModule,
    ProgresoVideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}