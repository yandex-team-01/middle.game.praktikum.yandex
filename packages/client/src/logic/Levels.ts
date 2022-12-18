import { GAME_SETTINGS, scoreLevels } from './const';
import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';

export class Levels {
  private ctx: CanvasRenderingContext2D;
  private playerOne: PlayerOne;
  private npcControll: NpcControll;
  private levelName?: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    playerOne: PlayerOne,
    npcControll: NpcControll
  ) {
    this.ctx = ctx;
    this.playerOne = playerOne;
    this.npcControll = npcControll;
  }

  levelInfo() {
    const score = this.playerOne.score;
    scoreLevels.forEach(level => {
      if (score === level.score) {
        this.levelName = level.name;
      }
    });
    this.ctx.fillText(`${this.levelName}`, 200, 140);
  }

  levelUp() {
    const score = this.playerOne.score;
    scoreLevels.forEach(level => {
      if (score === level.score) {
        this.playerOne.speed =
          this.playerOne.speed + GAME_SETTINGS.PLAYER_COLLISION_SPEED_BONUS;
        this.npcControll.arrNpc.forEach(npc => {
          npc.speed = npc.speed + GAME_SETTINGS.NPC_ENEMY_COLLISION_SPEED_BONUS;
        });
      }
    });
  }

  render() {
    // Добавлено для теста, будет удалено перед мерджем
    this.levelInfo();
    this.ctx.fillText(`Player ${this.playerOne.speed.toFixed(2)}`, 200, 40);
    this.ctx.fillText(
      `Kissy ${this.npcControll.arrNpc[0].speed.toFixed(2)}`,
      200,
      70
    );
    this.ctx.fillText(
      `Huggy ${this.npcControll.arrNpc[1].speed.toFixed(2)}`,
      200,
      100
    );
  }
}
