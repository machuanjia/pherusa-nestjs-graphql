/*
 * @Author: D.Y
 * @Date: 2021-07-05 09:53:09
 * @LastEditTime: 2021-07-05 09:57:26
 * @LastEditors: D.Y
 * @FilePath: /pherusa-graphql/src/app.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  // controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
