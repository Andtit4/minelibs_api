import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  _id: string

  @Column()
  email: string

  @Column()
  pass: string

  @Column()
  unit: number

  @Column()
  category: string

  @CreateDateColumn()
  created_at: string


}
