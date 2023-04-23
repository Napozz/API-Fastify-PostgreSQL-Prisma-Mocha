import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const readAll = async (): Promise<any> => {
    const articles = await prisma.articles.findMany();
    return articles;
}

export const readArticle = async (id: string) => {
    try{
        const article = await prisma.articles.findUnique({
            where: {
                id: id
            }
        });
        return article;
    }catch (err){
        console.error(err);
    }
}

export const createArticle = async (article: Prisma.ArticlesCreateInput) => {
    try {
        const res = await prisma.articles.create({
            data: article
        });
    
        return res;
    }catch  (err){
        console.error(err);
    }
}

export const updateArticle = async (id: string, data: Prisma.ArticlesUpdateInput) => {
    try {
        const res = await prisma.articles.update({
            where: {
                id: id
            },
            data: data
        });
    
        return res;
    }catch (err){
        console.error(err);
    }
}

export const patchArticle = async (id: string, data: Prisma.ArticlesUpdateInput) => {
    try {
        const res = await prisma.articles.update({
            where: {
                id: id
            },
            data: data
        });
    
        return res;
    }catch (err){
        console.error(err);
    }
}

export const deleteArticle = async (id: string) => {
    try {
        const res = await prisma.articles.delete({
            where: {
                id: id
            }
        });
        return res;
    }catch (err){
        console.error(err);
    }
}