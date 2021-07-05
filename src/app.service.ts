/*
 * @Author: D.Y
 * @Date: 2021-07-05 09:53:09
 * @LastEditTime: 2021-07-05 09:56:47
 * @LastEditors: D.Y
 * @FilePath: /pherusa-graphql/src/app.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { Cat } from './graphql.schema';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [
    { id: 1, name: 'a', age: 1 },
    { id: 2, name: 'b', age: 2 },
  ];
  hello(): string {
    return 'Hello World!';
  }

  findCat(id: number): Cat {
    return this.cats.find((c) => c.id === id);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  addCat(cat: Cat): Cat {
    const newCat = { id: this.cats.length + 1, ...cat };
    console.log(newCat);
    this.cats.push(newCat);
    return newCat;
  }
}
