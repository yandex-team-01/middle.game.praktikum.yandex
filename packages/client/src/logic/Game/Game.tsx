import { PlayerOne } from '../../logic/Player/Player';
import { AllSprites } from '../Sprite';
import { View } from '../View';
import { NpcControll } from '../NpcControll';
import { SPRITE_ID } from '../const';
import { GameEntities, AllSpritesType } from '../types';

export class Game {
  private ctx: CanvasRenderingContext2D;
  private width = 800;
  private height = 500;

  private playerOne: PlayerOne;
  private gameOverBackgroundAudio: HTMLAudioElement | undefined;
  private allSprites: AllSprites;
  private sprites: AllSpritesType;
  private npcControll: NpcControll;

  public view: View;

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.playerOne = new PlayerOne(this.ctx, this.height, this.width);
    this.allSprites = new AllSprites();
    this.npcControll = new NpcControll();
    this.view = new View(this.canvas, this.ctx, this.gameEntities);
    this.sprites = {};
  }

  async init(callback: () => void) {
    await this.allSprites.prepareSprites();
    this.sprites = this.allSprites.getSprites();
    this.start();
    callback();
  }

  private prepareObjectGame() {
    // функция чтобы отдать готовые спрайты всем
    this.view.setSprite(this.sprites);
    this.playerOne.setSprite(this.sprites[SPRITE_ID.PLAYER]);
    this.npcControll.setSprite(this.sprites[SPRITE_ID.NPC]);
  }

  get gameEntities(): GameEntities {
    return {
      player: this.playerOne,
      sprites: this.sprites,
      view: this.view,
      npcControll: this.npcControll,
    };
  }

  destruct() {
    //TODO: вынести подписку/отписку от событий в отдельный класс Controll
    window.removeEventListener('keydown', this.playerOne.keyDownCustom);
    window.removeEventListener('keyup', this.playerOne.keyUpCustom);

    this.view.stopCycle();
  }

  start() {
    this.prepareObjectGame();
    this.view.startCycle();
  }

  end() {
    //TODO: вынести в отдельный контроллер для аудио
    if (typeof this.gameOverBackgroundAudio === 'undefined') {
      this.gameOverBackgroundAudio = new Audio(
        '/src/assets/audio/game-over.mp3'
      );
      this.gameOverBackgroundAudio.play();
    }
    this.view.stopCycle();
  }
}
