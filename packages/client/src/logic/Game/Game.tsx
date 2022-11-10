import { PlayerOne } from '../../logic/Player/Player';
import { Sprite } from '../Sprite';
import { View } from '../View';
import { Npc } from '../Npc';
import { sprites, SPRITE_ID, defaultOptionNpc } from '../const';
import { GameEntities, AllSprites } from '../types';

export class Game {
  private ctx: CanvasRenderingContext2D;
  private width = 800;
  private height = 500;

  public fpsInterval: number | undefined;
  public now: number | undefined;
  public then: number | undefined;
  public elapsed: number | undefined;
  public animationRequestId: number | undefined;

  private playerOne: PlayerOne;
  // private playerTwo: PlayerTwo; //временно убрала второго игрока
  private gameOverBackgroundAudio: HTMLAudioElement | undefined;

  private defoultSprites = sprites;
  public sprites: AllSprites;
  public view: View;
  public arrNpc: Npc[];

  constructor(protected canvas: HTMLCanvasElement) {
    this.sprites = {};

    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.view = new View(this.canvas);
    this.playerOne = new PlayerOne(this.ctx, this.height, this.width);
    // this.playerTwo = new PlayerTwo(this.ctx, this.height,this.width);//временно убрала второго игрока

    // временно вывожу массив npc
    this.arrNpc = defaultOptionNpc.map(option => new Npc(option));
  }

  async init(ignore: boolean, callback: () => void) {
    await this.prepareSprites();
    if (ignore) {
      this.start();
      callback();
    }
  }

  private prepareSprite = (sprite: Sprite) => {
    if (this.sprites[sprite.id]) {
      throw Error('error');
    }

    this.sprites[sprite.id] = sprite;
  };

  private async prepareSprites() {
    const sprites = this.defoultSprites.map(options => new Sprite(options));

    sprites.forEach(this.prepareSprite);
    await Promise.all(sprites.map(sprite => sprite.load()));
  }

  private prepareObjectGame() {
    // функция чтобы отдать готовые спрайты всем
    this.view.setSprite(this.sprites);
    this.playerOne.setSprite(this.sprites[SPRITE_ID.PLAYER]);
    this.arrNpc.forEach(item => item.setSprite(this.sprites[SPRITE_ID.NPC]));
  }

  get gameEntities(): GameEntities {
    return {
      player: this.playerOne,
      sprites: this.sprites,
      view: this.view,
      arrNpc: this.arrNpc,
    };
  }

  destruct() {
    //TODO: вынести подписку/отписку от событий в отдельный класс Controll
    window.removeEventListener('keydown', this.playerOne.keyDownCustom);
    //window.removeEventListener('keydown',  this.playerTwo.keyDownCustom);
    window.removeEventListener('keyup', this.playerOne.keyUpCustom);
    //window.removeEventListener('keyup',  this.playerTwo.keyUpCustom);

    if (this.animationRequestId) {
      cancelAnimationFrame(this.animationRequestId);
    }
  }

  start() {
    this.startAnimating(10);
    this.prepareObjectGame();
    const updater = () => {
      this.animate();
      this.animationRequestId = requestAnimationFrame(updater); // for subsequent frames
    };
    this.animationRequestId = requestAnimationFrame(updater); // for the first frame https://stackoverflow.com/a/44975010
  }

  end() {
    //TODO: вынести в отдельный контроллер для аудио
    if (typeof this.gameOverBackgroundAudio === 'undefined') {
      this.gameOverBackgroundAudio = new Audio(
        '/src/assets/audio/game-over.mp3'
      );
      this.gameOverBackgroundAudio.play();
    }
    cancelAnimationFrame(this.animationRequestId as number);
    this.view.renderGameOver();
  }

  startAnimating(fps: number) {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
  }

  checkСollision(): void {
    // простая функция проверки столкновений
    const [x1, x2, y1, y2] = this.playerOne.position;

    this.arrNpc.forEach(npc => {
      const [x3, x4, y3, y4] = npc.position;
      let XColl = false;
      let YColl = false;

      if (x2 >= x3 && x1 <= x4) XColl = true;
      if (y2 >= y3 && y1 <= y4) YColl = true;

      if (XColl && YColl) {
        console.log('столкновение!');
      }
    });
  }

  animate() {
    if (this.then !== undefined && this.fpsInterval !== undefined) {
      this.now = Date.now();
      this.elapsed = this.now - this.then;
      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - (this.elapsed % this.fpsInterval);
        this.checkСollision();
        this.view.update(this.gameEntities);
      }
    }
  }
}
