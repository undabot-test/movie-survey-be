import {
  Controller,
  Get,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getSurvey() {
    return this.surveyService.getSurvey();
  }
}
