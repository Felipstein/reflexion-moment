import { AxiosError } from 'axios';

export default class APIError extends Error {
  constructor(axiosError) {
    super();

    if (!(axiosError instanceof AxiosError)) {
      this.message = 'Erro desconhecido';
      return;
    }

    const { data, status } = axiosError.response;

    if (!data) {
      this.status = '500';
      this.message = 'Nossos servidores não estão respondendo no momento, tente novamente mais tarde';
      return;
    }

    this.message = data.message;
    this.status = status;
  }
}
