import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from 'src/controllers/person.controller';
import { Person } from 'src/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  exports: [TypeOrmModule],
  controllers: [PersonController],
})
export class PersonModule {}
