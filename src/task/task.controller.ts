import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';
// import { Task } from './entities/task.entity';
import { User as Uuser } from './user.model'
// import { FilterDto } from './dto/get-task-filter.dto';


@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get("/all")
  getAllTasks(){
    return this.taskService.getAllTasks()
  }

  @Post("creatTask")
  async createTask(@Body() body:CreateTaskDto ):Promise<Uuser> {
    return this.taskService.createTask(body);
  }


  // @Get('/:id')
  // getTaskById(@Param('id') id:string){
  //   return this.taskService.getTaskById(id)
  // }

  // @Get("/search")
  // getTask(@Query() FilterDto:FilterDto):Task[]{
  //   if(Object.keys(FilterDto).length){
  //     return this.taskService.getTasksWithFilters(FilterDto)
  //   }else{
  //     return this.taskService.getAllTasks()
  //   }
  // }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(+id, updateTaskDto);
  // }

  @Delete('/delOne/:id')
  async remove(@Param('id') id: string):Promise<void> {
    console.log(id,"ididi");
    
    return this.taskService.remove(id);
  }

}
