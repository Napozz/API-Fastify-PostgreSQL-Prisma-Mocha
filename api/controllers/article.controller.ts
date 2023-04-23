import { FastifyReply, FastifyRequest } from "fastify";
import * as services from "../services/index";
import { Prisma } from "@prisma/client";

export const getAllArticles = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const articles = await services.readAll();
        res.status(200).send(articles);
    }catch (err){
        console.error(err);
    }
}

export const getArticles = async (req: FastifyRequest<{Params: {id: string}}>, res: FastifyReply) => {
    try {
        const {id}  = req.params;
        const article = await services.readArticle(id);
        res.status(200).send(article);
    }catch (err){
        console.error(err);
    }
}

export const postArticles = async (req: FastifyRequest<{Body: Prisma.ArticlesCreateInput}>, res: FastifyReply) => {
    try {
        const result = await services.createArticle(req.body);
        res.status(200).send(result);
    }catch (err){
        console.error(err);
    }
    
}

export const putArticles = async (req: FastifyRequest<{Params: {id : string}, Body: Prisma.ArticlesUpdateInput}>, res: FastifyReply) => {
    try {
        const {id} = req.params;
        const {...article} = req.body;
        const result = await services.updateArticle(id, article);
        res.status(200).send(result);
    }catch (err) {
        console.error(err);
    }
}

export const patchArticles = async (req: FastifyRequest<{Params: {id : string}, Body: Prisma.ArticlesUpdateInput}>, res: FastifyReply) => {
    try {
        const {id} = req.params;
        const {...article} = req.body;
        const result = await services.updateArticle(id, article);
        res.status(200).send(result);
    }catch (err) {
        console.error(err);
    }
}

export const deleteArticles = async (req: FastifyRequest<{Params: {id : string}}>, res: FastifyReply) => {
    try {
        const { id }= req.params
        const result = await services.deleteArticle(id);
    }catch (err){
        console.error(err);
    }
}