import { FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { MaxFileSizeValidator, NotFoundException } from "@nestjs/common";
import { Logger } from "@nestjs/common";

export abstract class AbstractRepository<TDocument extends AbstractDocument>{
    protected abstract readonly logger: Logger;

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


    async findOneAndUpdate( 
        filterQuery: FilterQuery<TDocument>,
        update: UpdateQuery<TDocument>
        ):Promise<TDocument>
        {

        const document = this.model.findOneAndUpdate(filterQuery,update,{
            new:true
        }).lean<TDocument>(true)


        if(!document){
            this.logger.warn('no document found with the filter query',MaxFileSizeValidator)
            throw new NotFoundException('document was not found')
        }

        return document
       
    }


    async find(filterQuery: FilterQuery<TDocument>):Promise<TDocument>{

        return await this.model.find(filterQuery).lean<TDocument>(true);
    }


    async findOneAndDelete(filterQuery: FilterQuery<TDocument>):Promise<TDocument>{

        return await this.model.findOneAndDelete(filterQuery).lean<TDocument>(true);
    }
}