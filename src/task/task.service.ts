import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';
import { User as Uuser } from './user.model';
import { V4 as uuid } from 'uuid'
// import { FilterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/task.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){

  }

  // getTaskById(id: string): Task {
  //   return
  // }

  async getAllTasks():Promise<Uuser[]> {
    const allUser = this.userRepository.find();
    return allUser
  }

  // getTasksWithFilters(fliterDto: FilterDto): Task[] {
  //   const { status, search } = fliterDto

  //   let tasks = this.getAllTasks()
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status)
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.toLowerCase().includes(search) || task.description.toLowerCase().includes(search)) {
  //         return true
  //       }
  //       return false
  //     })
  //   }
  //   return tasks;
  // }

  async createTask(createTaskDto: CreateTaskDto): Promise<Uuser> {
    
    const { username, password } = createTaskDto
    
    const user:Uuser = {
      username,
      password,
    }
    const aUser = await this.userRepository.create(user)
    this.userRepository.save(aUser)
    return aUser
  }



  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
