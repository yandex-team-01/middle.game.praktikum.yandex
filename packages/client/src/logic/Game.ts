import { PlayerOne } from './Player';
import { AllSprites } from './Sprite';
import { View } from './View';
import { NpcControll } from './NpcControll';
import { GameEntities, AllSpritesType } from './types';
import { Timer } from './Timer';
import { GAME_SETTINGS } from './const';
import { Speedometer } from './Speedometer';
import { SpeedometerController } from './SpeedometerController';
import { Levels } from './Levels';

export class Game {
  private ctx: CanvasRenderingContext2D;
  private width = GAME_SETTINGS.GAME_WIDTH;
  private height = GAME_SETTINGS.GAME_HEIGHT;
  public playerOne: PlayerOne;
  private gameOverBackgroundAudio: HTMLAudioElement | undefined;
  private allSprites: AllSprites;
  private sprites: AllSpritesType;
  private npcControll: NpcControll;
  private timer: Timer;
  private speedometer: Speedometer;
  private speedometerController: SpeedometerController;
  private levels: Levels;
  public view: View;
  private onEndGame?: (score: number) => void;

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.speedometerController = new SpeedometerController(this.ctx);

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
    this.npcControll = new NpcControll(this.ctx, this.height, this.width);
    this.speedometer = new Speedometer(
      this.playerOne,
      this.npcControll,
      this.speedometerController
    );
    this.levels = new Levels(
      this.ctx,
      this.width,
      this.playerOne,
      this.npcControll,
      this.speedometerController
    );
    this.levels = new Levels(
      this.ctx,
      this.width,
      this.playerOne,
      this.npcControll
    );
    this.view = new View(this.canvas, this.ctx, this.gameEntities);
    this.sprites = {};
  }

  async init(callback: () => void, onEndGame: (score: number) => void) {
    await this.allSprites.prepareSprites();
    this.gameOverBackgroundAudio = new Audio('/src/assets/audio/game-over.mp3');

    this.sprites = this.allSprites.getSprites();
    this.onEndGame = onEndGame;

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
      timer: this.timer,
      speedometer: this.speedometer,
      speedometerController: this.speedometerController,
      levels: this.levels,
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

  end(isWin = false, score: number) {
    //TODO: вынести в отдельный контроллер для аудио
    if (this.gameOverBackgroundAudio) {
      this.gameOverBackgroundAudio.currentTime = 0;
      this.gameOverBackgroundAudio.play();
    }
    this.view.stopCycle(isWin);
    this.onEndGame?.(score);
  }
}
