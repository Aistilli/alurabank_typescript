import { Negociacao } from "./negociacao.js";

export class Negociacoes {
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
}
