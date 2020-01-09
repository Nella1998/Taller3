import { ViewEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@ViewEntity({
  name: 'vw_locations', 
  synchronize: false,
})
export class VWLocation {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}