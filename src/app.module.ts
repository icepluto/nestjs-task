import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import {  TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49154,
      username: 'postgres',
      password: 'postgres',
      database: 'tasks',
      autoLoadEntities:true,
      //synchronize: true不应在生产中使用 设置- 否则您可能会丢失生产数据
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
