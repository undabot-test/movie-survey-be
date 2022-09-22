import { QuestionModel } from 'src/questions/model/question.model';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Expose, Exclude } from 'class-transformer';

@Entity('survey')
export class SurveyModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose()
  get attributes() {
    return {
      title: this.title,
      description: this.description,
      questions: this.questions,
    };
  }

  @Column()
  @Exclude()
  title: string;

  @Column()
  @Exclude()
  description: string;

  @ManyToMany(() => QuestionModel)
  @JoinTable()
  @Exclude()
  questions: [];
}
