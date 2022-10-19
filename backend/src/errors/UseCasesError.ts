export class UseCasesError extends Error {

  public readonly statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message ?? 'Erro desconhecido');
    this.statusCode = statusCode;
  }

}