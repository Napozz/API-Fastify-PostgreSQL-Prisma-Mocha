import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();
// do anonyme function 
app.listen({port: 8808}, (err, address) => {
    if(err){
        console.error(err);
        process.exit(1);
    }

    console.log(`Server listenning at ${address}`);
});