import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class UserDb {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  email!: string;

  @Column()
  password?: string;

  @Column()
  display_name?: string;
}
