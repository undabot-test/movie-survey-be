import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { QuestionsModule } from 'src/questions/questions.module';
import { SurveyModule } from 'src/survey/survey.module';
import { ResponseInterceptor } from './response.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_SSL && { rejectUnauthorized: false },
      autoLoadEntities: true,
      synchronize: true,
    }),
    QuestionsModule,
    SurveyModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
