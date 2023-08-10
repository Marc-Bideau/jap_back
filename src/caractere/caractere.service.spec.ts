import { Test, TestingModule } from '@nestjs/testing';
import { CaractereService } from './caractere.service';

describe('CaractereService', () => {
  let service: CaractereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaractereService],
    }).compile();

    service = module.get<CaractereService>(CaractereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
