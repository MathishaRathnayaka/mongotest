import { Test, TestingModule } from '@nestjs/testing';
import { SectionController } from './section.controller';

describe('sectionController', () => {
  let controller: SectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectionController],
    }).compile();

    controller = module.get<SectionController>(SectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
export class  sectionModule {}
