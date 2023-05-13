import { Test, TestingModule } from '@nestjs/testing';
import { articalController } from './artical.controller';

describe('ArticalController', () => {
  let controller: articalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [articalController],
    }).compile();

    controller = module.get<articalController>(articalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
