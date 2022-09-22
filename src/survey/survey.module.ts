import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswersModule } from 'src/answers/answers.module';
import { SurveyModel } from './model/survey.model';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyModel]), AnswersModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
