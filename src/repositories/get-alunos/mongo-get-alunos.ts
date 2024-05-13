import { IGetAlunosRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { Aluno } from "../../models/aluno";

export class MongoGetAlunosRepository implements IGetAlunosRepository {
  async getAlunos(): Promise<Aluno[]> {
    const alunos = await MongoClient.db
      .collection<Omit<Aluno, "id">>("alunos")
      .find({})
      .toArray();

    return alunos.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
