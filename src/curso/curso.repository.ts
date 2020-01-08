import { EntityRepository, Repository } from "typeorm";
import { Curso } from "./curso.entity";

@EntityRepository(Curso)
export class CursoRepositorio extends Repository<Curso>{

    async getMetaData(id:number):Promise<Curso>{

    const curso = await this.createQueryBuilder("curso")
                        .leftJoinAndSelect("curso.modulos", "modulo")
                        .where('curso.id = :id',{id:id});
        return await curso.getOne();
     }
}