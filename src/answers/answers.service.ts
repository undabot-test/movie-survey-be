import { Injectable } from '@nestjs/common';
import { Answer } from './answer.interface';

@Injectable()
export class AnswersService {
  async saveAnswers(answers: Answer[]) {
    return answers;
  }
}
