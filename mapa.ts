import p5 from 'p5';

const tam = 50;

export default class Mapa {
  private matriz: Array<Array<number>> = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  ];

  show(p: p5) {
    this.matriz.forEach((item, index) => {
      item.forEach((celda, i) => {
        if (celda === 0) {
          p.fill(255);
        }
        if (celda === 1) {
          p.fill(0);
        }
        p.rect(i * tam, index * tam, tam, tam);
      });
    });
  }

  isFree(col: number, fila: number): boolean {
    let result = false;
    switch (this.matriz[fila][col]) {
      case 0:
        result = true;
        break;
      case 1:
        result = false;
        break;

      default:
        break;
    }
    return result;
  }
}
