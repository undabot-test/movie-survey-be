import {
  Controller,
  Get,
  Post,
  ClassSerializerInterceptor,
  UseInterceptors,
  Param,
  Body,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyDto } from './dto/survey.dto';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getSurvey() {
    return this.surveyService.getSurvey();
  }

  @Post(':id/answers')
  submitSurvey(@Param('id') id: string, @Body() { data }: SurveyDto) {
    return this.surveyService.submitSurvey(id, data.attributes.answers);
  }
}
