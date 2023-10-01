//import { Exclude } from 'class-transformer';

import { ReportEntity } from 'src/reports/report.entity';
import { Entity, Column, PrimaryGeneratedColumn, AfterRemove, AfterInsert, AfterUpdate, OneToMany } from 'typeorm';

@Entity()
export class userEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  //@Exclude() // use with default nest intercepter
  password: string;

  @Column()
  admin: boolean;

  @OneToMany(() => ReportEntity, (report) => report.user)
  reports: ReportEntity[];




  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}