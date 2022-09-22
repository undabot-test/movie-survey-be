import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModel } from './model/question.model';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionModel])],
})
export class QuestionsModule {}
