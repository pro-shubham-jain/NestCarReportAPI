import { userEntity } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class ReportEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  model: string;

  @Column()
  make: string;

  @Column()
  year: number;


  @Column()
  lng: number;


  @Column()
  lat: number;


  @Column()
  mileage: number;

  @ManyToOne(() => userEntity, (user) => user?.reports)
  user: userEntity;


  @Column({ default: false })
  approved: boolean;

}