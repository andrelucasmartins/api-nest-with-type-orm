import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sql',
      entities: ['dist/**/*.entities.js'],
      synchronize: true,
    }),
    PersonModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
})
export class AppModule {
  // constructor(private dataSource: DataSource) {}
}
