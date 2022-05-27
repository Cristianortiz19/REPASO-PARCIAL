import p5 from 'p5';
import Mapa from './mapa';

const tam = 50;

export default class Player {
  private x: number = 0;

  private y: number = 0;

  private fila: number = 0;

  private col: number = 0;

  private refMapa: Mapa | null = null;

  constructor(fila: number, col: number) {
    this.fila = fila;
    this.col = col;
    this.position();
  }

  position() {
    this.x = (this.fila * tam) - (tam / 2) + 50;
    this.y = (this.col * tam) - (tam / 2) + 50;
  }

  show(p: p5) {
    p.fill(255, 0, 0);
    p.circle(this.x, this.y, 30);
  }

  move(dir: string) {
    switch (dir) {
      case 'UP':
        if (this.refMapa?.isFree(this.fila, this.col - 1)) this.col -= 1;
        break;
      case 'DOWN':
        if (this.refMapa?.isFree(this.fila, this.col + 1)) this.col += 1;
        break;
      case 'RIGHT':
        if (this.refMapa?.isFree(this.fila + 1, this.col)) this.fila += 1;
        break;
      case 'LEFT':
        if (this.refMapa?.isFree(this.fila - 1, this.col)) this.fila -= 1;
        break;
      default:
        break;
    }
    this.position();
  }

  setRefMapa(newRefMapa: Mapa) {
    this.refMapa = newRefMapa;
  }
}
