import { Aluno } from "../../models/aluno";
import { HttpResponse } from "../protocols";

export interface IGetAlunosController {
  handle(): Promise<HttpResponse<Aluno[]>>;
}

export interface IGetAlunosRepository {
  getAlunos(): Promise<Aluno[]>;
}
