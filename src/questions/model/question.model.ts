import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('question')
export class QuestionModel {
  @PrimaryColumn()
  questionId: string;

  @Column()
  questionType: string;

  @Column()
  label: string;

  @Column()
  required: boolean;

  @Column('simple-json', { nullable: true })
  attributes: unknown;
}
