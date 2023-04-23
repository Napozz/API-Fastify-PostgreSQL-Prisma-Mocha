import { FastifyInstance } from "fastify";
import * as controller from "../controllers/index";

export const articlesRouter = async (fastify: FastifyInstance) => {
    fastify.route({ 
        method: "GET",
        url: "/",
        handler: controller.getAllArticles 
    });

    fastify.route({ 
        method: "GET",
        url: "/:id",
        handler: controller.getArticles 
    });

    fastify.route({ 
        method: "POST",
        url: "/",
        handler: controller.postArticles 
    });

    fastify.route({ 
        method: "PUT",
        url: "/:id",
        handler: controller.putArticles 
    });
    
    fastify.route({ 
        method: "PATCH",
        url: "/:id",
        handler: controller.patchArticles 
    });

    fastify.route({ 
        method: "DELETE",
        url: "/:id",
        handler: controller.deleteArticles 
    });
}