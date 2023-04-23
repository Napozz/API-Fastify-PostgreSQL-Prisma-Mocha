import fastify, { FastifyInstance } from "fastify";
const {articlesRouter}= require("./routes/index");

const app: FastifyInstance = fastify();

app.register(articlesRouter, {prefix: "/articles"});

app.listen({port: 8808}, (err, address) => {
    if(err){
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listenning at ${address}`);
});