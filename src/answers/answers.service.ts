import { Injectable } from '@nestjs/common';
import { AnswerInput } from './dto/answer.dto';

@Injectable()
export class AnswersService {
  saveAnswers(answers: AnswerInput[]) {
    return answers;
  }
}
