import { IGetAlunosController, IGetAlunosRepository } from "./protocols";

export class GetAlunosController implements IGetAlunosController {
  constructor(private readonly getAlunosRepository: IGetAlunosRepository) {}
  async handle() {
    try {
      const alunos = await this.getAlunosRepository.getAlunos();
      return {
        statusCode: 200,
        body: alunos,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Algo de errado não está certo!",
      };
    }
  }
}
