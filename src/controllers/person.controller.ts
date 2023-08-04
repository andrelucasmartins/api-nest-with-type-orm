import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person.entity';
import { PersonSchema } from 'src/schemas/person.schema';
import { Repository } from 'typeorm';

@Controller('/person')
export class PersonController {
  constructor(@InjectRepository(Person) private model: Repository<Person>) {}

  @Post()
  public create(@Body() body: PersonSchema): any {
    console.log(body);
    return { data: 'Create !!!' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'Get one !!!' };
  }

  @Get()
  public async getAll(): Promise<{ data: Person[] }> {
    const list = await this.model.find();
    return { data: list };
  }

  @Put(':id')
  public update(): any {
    return { data: 'Update !!!' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Delete !!!' };
  }
}
