import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyModel } from './model/survey.model';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyModel)
    private readonly surveyRepository: Repository<SurveyModel>,
  ) {}

  findOne() {
    return this.surveyRepository.findOne({
      relations: ['questions'],
      select: ['id', 'title', 'description', 'questions'],
      where: {},
    });
  }

  getSurvey() {
    return this.findOne();
  }
}
