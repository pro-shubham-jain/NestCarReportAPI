import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from './user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(userEntity) private repo: Repository<userEntity>) {
  }

  create(email: string, password: string, admin: boolean) {
    const user = this.repo.create({ email, password, admin });
    return this.repo.save(user);
  }

  find(email: string) {
    return this.repo.findBy({ email });
  }

  async findOne(id: number) {
    if (!!id) {
      return this.repo.findOneBy({ id });
    } else {
      return null;
    }
  }

  async update(id: number, attrs: Partial<userEntity>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }

}
