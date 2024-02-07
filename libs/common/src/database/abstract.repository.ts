import { FilterQuery, Model, Types } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { filter } from "rxjs";
import { MaxFileSizeValidator, NotFoundException } from "@nestjs/common";


export abstract class AbstractRepository<TDocument extends AbstractDocument>{
    constructor(protected readonly model:Model<TDocument>){

    }

    async create(document: Omit<TDocument,'_id'>):Promise<TDocument>{

        const createdDocument = new this.model({
            ...document,
            _id:new Types.ObjectId()
        })

        return (await createdDocument.save()).toJSON() as unknown as TDocument
    }

    async findOne(filterQuery:FilterQuery<TDocument>):Promise<TDocument>{
        const document = await this.model.findOne(filterQuery).lean<TDocument>(true)

        if(!document){
            this.logger.warn('no document found with the filter query',MaxFileSizeValidator)
            throw new NotFoundException('document was not found')
        }

        return document
    }
}