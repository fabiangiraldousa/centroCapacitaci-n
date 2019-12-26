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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}