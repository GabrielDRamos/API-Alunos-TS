import express from "express";
import { config } from "dotenv";
import { GetAlunosController } from "./controllers/get-users/get-alunos";
import { MongoGetAlunosRepository } from "./repositories/get-alunos/mongo-get-alunos";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  await MongoClient.connect();

  app.get("/alunos", async (req, res) => {
    const mongoGetAlunosRepository = new MongoGetAlunosRepository();
    const controller = new GetAlunosController(mongoGetAlunosRepository);
    const response = await controller.handle();
    res.send(response.body).status(response.statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Ouvindo na porta ${port}`);
  });
};

main();
