import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'departments', 
  synchronize: false,
})
export class Department {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}