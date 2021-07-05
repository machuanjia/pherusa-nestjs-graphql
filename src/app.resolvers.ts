/*
 * @Author: D.Y
 * @Date: 2021-07-05 09:56:19
 * @LastEditTime: 2021-07-05 09:56:28
 * @LastEditors: D.Y
 * @FilePath: /pherusa-graphql/src/app.resolvers.ts
 * @Description:
 */
import { ParseIntPipe } from '@nestjs/common';
import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  // query { hello }
  @Query()
  hello(): string {
    return this.appService.hello();
  }

  // query { findCat(id: 1) { name age } }
  // 网络传输过来的id会是字符串类型，而不是number
  @Query('findCat')
  findOneCat(@Args('id', ParseIntPipe) id: number) {
    return this.appService.findCat(id);
  }

  // query { cats { id name age } }
  @Query()
  cats() {
    return this.appService.findAll();
  }

  // mutation { addCat(cat: {name: "ajanuw", age: 12}) { id name age } }
  @Mutation()
  addCat(@Args('cat') args) {
    console.log(args);
    return this.appService.addCat(args);
  }
}
