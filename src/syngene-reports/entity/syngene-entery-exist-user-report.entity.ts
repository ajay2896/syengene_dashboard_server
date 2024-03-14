import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";
// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Table({
    freezeTableName: true,
    timestamps: false
})
export class UserReport_EntryExit extends Model {

    @Column
    Username: string;

    @Column
    Firstname: string;

    @Column
    Lastname: string;

    @Column
    Overall_Score:string;

    @Column
    Summary: string;

    @Column
    Time: string;

    @Column
    Date: string;

    @Column
    Module: string;

}