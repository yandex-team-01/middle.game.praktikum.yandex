import { SpeedometerController } from './SpeedometerController';

export class Speedometer {
  private speedometerController: SpeedometerController;

  constructor(speedometerController: SpeedometerController) {
    this.speedometerController = speedometerController;
  }

  private prepareSpeedometer() {
    this.speedometerController.speedometerTypeFilter('player');
    this.speedometerController.speedometerTypeFilter('enemy_huggy');
    this.speedometerController.speedometerTypeFilter('enemy_kissy');
  }

  render() {
    this.prepareSpeedometer();
  }
}
