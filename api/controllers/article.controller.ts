import { FastifyReply, FastifyRequest } from "fastify";
import * as services from "../services/index";

export const getAllArticles = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const articles = await services.readAll();
        res.status(200).send(articles);
    }catch (err){
        console.error(err);
    }
}

export const getArticles = async (req: FastifyRequest, res: FastifyReply) => {
    res.send("Hello World!");
}

export const postArticles = async (req: FastifyRequest, res: FastifyReply) => {
    res.send("Hello World!");
}

export const putArticles = async (req: FastifyRequest, res: FastifyReply) => {
    res.send("Hello World!");
}

export const patchArticles = async (req: FastifyRequest, res: FastifyReply) => {
    res.send("Hello World!");
}

export const deleteArticles = async (req: FastifyRequest, res: FastifyReply) => {
    res.send("Hello World!");
}