import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyModel } from './model/survey.model';
import { AnswersService } from '../answers/answers.service';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyModel)
    private readonly surveyRepository: Repository<SurveyModel>,
    private readonly answersService: AnswersService,
  ) {}

  findOne() {
    return this.surveyRepository.findOne({
      relations: ['questions'],
      select: ['id', 'title', 'description', 'questions'],
      where: {},
    });
  }

  findOneById(id: string) {
    return this.surveyRepository.findOne({
      select: ['id'],
      where: { id },
    });
  }

  getSurvey() {
    return this.findOne();
  }

  async submitSurvey(id: string, answers) {
    await this.answersService.saveAnswers(answers);
    const survey = await this.findOneById(id);
    return {
      type: 'surveyAnswers',
      id,
      attributes: {
        answers,
      },
      relationships: {
        survey: {
          data: survey,
        },
      },
    };
  }
}
