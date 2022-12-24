import { GAME_SETTINGS, scoreLevels } from './const';
import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';

export class Levels {
  private ctx: CanvasRenderingContext2D;
  private canvasWidth: number;
  private playerOne: PlayerOne;
  private npcControll: NpcControll;
  private levelName?: string;
  private playerOneSpeed: number;
  private huggySpeed: number;
  private kissySpeed: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasWidth: number,
    playerOne: PlayerOne,
    npcControll: NpcControll
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.playerOne = playerOne;
    this.npcControll = npcControll;
    this.playerOneSpeed = GAME_SETTINGS.PLAYER_SPEED;
    this.huggySpeed = GAME_SETTINGS.ENEMY_SPEED;
    this.kissySpeed = GAME_SETTINGS.ENEMY_SPEED;
  }

  private prepareLevelInfo() {
    const score = this.playerOne.score;
    scoreLevels.forEach(level => {
      if (score === level.score) {
        this.levelName = level.name;
      }
    });
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(`${this.levelName}`, this.canvasWidth / 2, 60);
  };

  updateLevel() {
    const score = this.playerOne.score;
    scoreLevels.forEach(level => {
      if (score === level.score) {
        this.playerOne.speed =
          this.playerOneSpeed + GAME_SETTINGS.PLAYER_LEVEL_SPEED_BONUS;
        this.playerOneSpeed = this.playerOne.speed;

        this.npcControll.arrNpcTypeFilter('enemy_huggy').speed =
          this.huggySpeed + GAME_SETTINGS.NPC_ENEMY_LEVEL_SPEED_BONUS;
        this.huggySpeed =
          this.npcControll.arrNpcTypeFilter('enemy_huggy').speed;

        this.npcControll.arrNpcTypeFilter('enemy_kissy').speed =
          this.kissySpeed + GAME_SETTINGS.NPC_ENEMY_LEVEL_SPEED_BONUS;
        this.kissySpeed =
          this.npcControll.arrNpcTypeFilter('enemy_kissy').speed;
      }
    });
  }

  render() {
    this.prepareLevelInfo();
  }
}
