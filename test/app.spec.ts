import { describe } from "mocha";
import supertest from "supertest";
import { app } from "../api/app";
import { expect } from "chai";

let server: supertest.SuperTest<supertest.Test>;

before(async ()=>{
    await app.ready();

    server = await supertest(app.server);
})

describe("Check '/articles' route", () => {
    it("GET / route: ", async () => {
        const res = await server.get("/articles").expect(200);
        expect(res.body).to.be.deep.equal([])
    });
})