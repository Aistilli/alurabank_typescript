import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }

  public static criaDe(
    dataSting: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataSting.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  //Deixando as propriedades somente de leitura, não precisamos mais dos getters
  // get quantidade(): number {
  //   return this._quantidade;
  // }

  // get valor(): number {
  //   return this._valor;
  // }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public paraTexto(): string {
    return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
      `;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
