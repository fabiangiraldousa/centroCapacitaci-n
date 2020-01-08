import { EntityRepository, Repository, RelationCount } from "typeorm";
import { Recurso } from "./recurso.entity";

@EntityRepository(Recurso)
export class RecursoRepositorio extends Repository<Recurso>{

    async getRecurso(id:number):Promise<any>{
        const query=this.createQueryBuilder("recurso");
        query.where(`recurso.id = :id`,{id:id});
        const result=await query.getOne();
        let especifico=null;
        if(result.tipo=="Video"){
            const queryB=this.createQueryBuilder("video");
                  queryB.where(`video.id = :id`,{id:id});
                  especifico=await  queryB.getOne();
        }else if(result.tipo=="CodigoFuente"){
            const queryB=this.createQueryBuilder("codigo-fuente");
                  queryB.where(`codigo-fuente.id = :id`,{id:id});
                  especifico=await  queryB.getOne();
        }else if(result.tipo=="Documentacion"){
            const queryB=this.createQueryBuilder("documentacion");
                  queryB.where(`codigo-fuente.id = :id`,{id:id});
                  especifico=await  queryB.getOne();
        }
        return especifico;
    }
}
