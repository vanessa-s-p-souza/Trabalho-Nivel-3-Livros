import Editora from "../modelo/Editora";

// Arquivo ControleEditora.ts
Editora

const editoras: Array<Editora> = [
  new Editora(1, 'Editora A'),
  new Editora(2, 'Editora B'),
  new Editora(3, 'Editora C'),
];

class ControleEditora {
  static getEditoras(): Array<Editora> {
    return editoras;
  }

  static getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;

