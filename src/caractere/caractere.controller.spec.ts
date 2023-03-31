import { Test, TestingModule } from '@nestjs/testing';
import { CaractereController } from './caractere.controller';

describe('CaractereController', () => {
  let controller: CaractereController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaractereController],
    }).compile();

    controller = module.get<CaractereController>(CaractereController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
