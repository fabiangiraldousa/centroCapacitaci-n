import { EntityRepository, Repository, RelationCount } from "typeorm";
import { Modulo } from "./modulo.entity";

@EntityRepository(Modulo)
export class ModuloRespositorio extends Repository<Modulo>{

    async getModulosCurso(id:number):Promise<Modulo[]>{
        console.log(id);
        const query=this.createQueryBuilder("modulo");
        query.where(`modulo."cursoId" = :id`,{id:id});
        const result=await query.getMany();
        return result;
    }
}
