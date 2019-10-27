import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "workspaces" })
export class DbWorkspace {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  display_name!: string;

  @Column()
  url_key?: string;
}
