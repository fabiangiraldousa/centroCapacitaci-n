import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Video } from 'src/video/video.entity';
import { Usuario } from 'src/usuario/usuario.entity';

@Entity()
export class ProgresoVideo {

    @PrimaryGeneratedColumn()
    id: bigint;

    @Column()
    marcaTemporal:string

    @OneToOne(type=>Video)
    @JoinColumn()
    video:Video;

    @OneToOne(type=>Usuario)
    @JoinColumn()
    usuario:Usuario;
}