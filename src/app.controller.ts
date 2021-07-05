/*
 * @Author: D.Y
 * @Date: 2021-07-05 09:53:09
 * @LastEditTime: 2021-07-05 09:58:05
 * @LastEditors: D.Y
 * @FilePath: /pherusa-graphql/src/app.controller.ts
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello'; //this.appService.getHello();
  }
}
