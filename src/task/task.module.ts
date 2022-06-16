import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
