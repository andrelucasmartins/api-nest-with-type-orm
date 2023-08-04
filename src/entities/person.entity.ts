import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  @ApiProperty()
  name: string;

  @Column('int')
  @ApiProperty()
  age: number;

  @Column({ length: 255 })
  @ApiProperty()
  email: string;
}
