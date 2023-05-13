import { Test, TestingModule } from '@nestjs/testing';
import { chapterController } from './chapter.controller';

describe('ChapterController', () => {
  let controller: chapterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [chapterController],
    }).compile();

    controller = module.get<chapterController>(chapterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
