import {
  Controller,
  Post,
  Get,
  Body, Param, Patch, Query, Delete, UseInterceptors, ClassSerializerInterceptor,
  Session,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from 'src/gaurds/auth.gaurd';

import { seralize } from 'src/interceptor/seralize.interceptor';
import { AuthService } from './auth/auth.service';
import { Currentuser } from './decorator/current-User.decorators';
import { createUserDto } from './DTOs/create-user.dto';
import { UpdateUserDto } from './DTOs/update-user.dto';
import { userDTO } from './DTOs/user.dto';
import { CurrentUserInterceptor } from './intercaptor/current-user.interceptor';
import { UsersService } from './users.service';

@Controller('auth')
@seralize(userDTO)
// @UseInterceptors(CurrentUserInterceptor)
export class UsersController {

  constructor(private userService: UsersService, private authService: AuthService,) { }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@Currentuser() user: any) {
    return user;
  }

  @Post('/signOut')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Post('/signUp')
  async createUser(@Body() body: createUserDto, @Session() session: any) {
    const user = await this.authService.signUp(body.email, body.password, body.admin);
    session.userId = user.id;
    return user;
  }

  @Post('/signIn')
  async signin(@Body() body: createUserDto, @Session() session: any) {
    const user = await this.authService.signIn(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  //@UseInterceptors(ClassSerializerInterceptor)
  // @seralize(userDTO)
  @Get('/:id')
  findUserbyId(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }



  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findUserByEmail(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }

}
