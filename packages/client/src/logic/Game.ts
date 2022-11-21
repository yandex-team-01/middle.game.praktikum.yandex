import { PlayerOne } from './Player';
import { AllSprites } from './Sprite';
import { View } from './View';
import { NpcControll } from './NpcControll';
import { GameEntities, AllSpritesType } from './types';
import { Timer } from './Timer';

export class Game {
  private ctx: CanvasRenderingContext2D;
  private width = 800;
  private height = 500;
  private playerOne: PlayerOne;
  private gameOverBackgroundAudio: HTMLAudioElement | undefined;
  private allSprites: AllSprites;
  private sprites: AllSpritesType;
  private npcControll: NpcControll;
  private timer: Timer;
  public view: View;
  
  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.playerOne = new PlayerOne(
      this.ctx,
      this.height,
      this.width,
      this.gameEntities
    );
    this.timer = new Timer(
      this.ctx,
      this.height,
      this.width,
      this.gameEntities
    );
    this.allSprites = new AllSprites();
    this.npcControll = new NpcControll(this.ctx,this.height, this.width);
    this.view = new View(this.canvas, this.ctx, this.gameEntities);
    this.sprites = {};
    
  }

  async init(callback: () => void) {
    await this.allSprites.prepareSprites();
    this.gameOverBackgroundAudio = new Audio('/src/assets/audio/game-over.mp3');
    this.sprites = this.allSprites.getSprites();

    this.start();
    callback();
  }

  private prepareObjectGame() {
    // функция чтобы отдать готовые спрайты всем
    this.view.setSprite(this.sprites);
    this.playerOne.setSprite(this.sprites);
    this.npcControll.setSprite(this.sprites);
  }

  get gameEntities(): GameEntities {
    return {
      player: this.playerOne,
      sprites: this.sprites,
      view: this.view,
      npcControll: this.npcControll,
      game: this,
      timer: this.timer
    };
  }

  destruct() {
    //TODO: вынести подписку/отписку от событий в отдельный класс Controll
    window.removeEventListener('keydown', this.playerOne.keyDownCustom);
    window.removeEventListener('keyup', this.playerOne.keyUpCustom);
    this.view.stopCycle();
    if (this.gameOverBackgroundAudio) {
      this.gameOverBackgroundAudio.pause();
    }
  }

  start() {
    this.prepareObjectGame();
    this.view.startCycle();
  }

  end(isWin = false) {
    //TODO: вынести в отдельный контроллер для аудио
    if (this.gameOverBackgroundAudio) {
      this.gameOverBackgroundAudio.currentTime = 0;
      this.gameOverBackgroundAudio.play();
    }
    this.view.stopCycle(isWin);
  }
}
