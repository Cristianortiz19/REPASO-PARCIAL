/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import Mapa from './mapa';
import Player from './player';

const mapa = new Mapa();
const player = new Player(3, 3);

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
    player.setRefMapa(mapa);
  };

  p.draw = () => {
    p.background(200);
    mapa.show(p);
    player.show(p);
  };

  p.keyPressed = () => {
    switch (p.key.toLocaleLowerCase()) {
      case 'w':
        player.move('UP');
        break;
      case 's':
        player.move('DOWN');
        break;
      case 'd':
        player.move('RIGHT');
        break;
      case 'a':
        player.move('LEFT');
        break;

      default:
        break;
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
