import {
  IsObject,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AnswerInput } from 'src/answers/dto/answer.dto';

export interface SurveyInput {
  type: 'surveyAnswers';
  attributes: {
    answers: AnswerInput[];
  };
}

@ValidatorConstraint({ name: 'survey', async: false })
export class IsSurvey implements ValidatorConstraintInterface {
  validate({ type, attributes }: SurveyInput) {
    if (type !== 'surveyAnswers') {
      return false;
    }
    return attributes.answers.every(({ questionId, answer }) => {
      return (
        questionId &&
        typeof questionId === 'string' &&
        answer &&
        typeof answer === 'string'
      );
    });
  }

  defaultMessage() {
    return 'Submitted survey format is invalid.';
  }
}

export class SurveyDto {
  @IsObject()
  @Validate(IsSurvey)
  data: SurveyInput;
}
