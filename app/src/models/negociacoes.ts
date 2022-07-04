import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  //   private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = []; // Funciona igual ao de cima

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  //   lista(): ReadonlyArray<Negociacao> {
  public lista(): readonly Negociacao[] {
    // Funciona igual ao de cima
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    throw (
      JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    );
  }
}
