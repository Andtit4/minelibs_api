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

  @CreateDateColumn()
  created_at: string


}
