import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from './enum/user.role.enum';
import { LoginDto } from './dto/login.dto';
import {  Response } from 'express';
import { RolesGuard } from 'src/auth/guards/role.guards';
import { Roles } from 'src/auth/guards/role';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Post('signin')
  signIn(@Body() LoginDto:LoginDto,    @Res() res: Response) {
    return this.userService.signIn(LoginDto,res);
  }
  @Get()
  @UseGuards(AuthGuard(),RolesGuard)
   @Roles(UserRole.ADMIN) // Only allow admin to access this route
   findAll() {
   return this.userService.findAll();
   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  
  @Patch(':id')
  @UseGuards(AuthGuard(),RolesGuard)
  @Roles(UserRole.ADMIN) // Only allow admin to access this route
  async makeadmin(@Param('id') id: string ,@Body()role:UserRole) {
    return this.userService.updateUserRole(id, role);
  }

}
// @UseGuards(AuthGuard(),RolesGuard) // Use the AuthGuard and RolesGuard to protect this route
// @Roles(UserRole.ADMIN) // Only allow admin to access this route