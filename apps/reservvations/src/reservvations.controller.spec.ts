import { Test, TestingModule } from '@nestjs/testing';
import { ReservvationsController } from './reservvations.controller';
import { ReservvationsService } from './reservvations.service';

describe('ReservvationsController', () => {
  let reservvationsController: ReservvationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReservvationsController],
      providers: [ReservvationsService],
    }).compile();

    reservvationsController = app.get<ReservvationsController>(ReservvationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reservvationsController.getHello()).toBe('Hello World!');
    });
  });
});
