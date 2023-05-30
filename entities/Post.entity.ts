import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { PostComment } from "./PostComment.entity";
import { PostMeta } from "./PostMeta.entity";
import { PostCategory } from "./PostCategory.entity";
import { PostTag } from "./PostTag.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn({
        type : "bigint"
    })
    id : string;

    @Column({
        length : 75
    })
    title : string;

    @Column("bigint")
    userId : string;

    @Column({
        length : 100,
        nullable : true
    })
    metaTitle : string | null;

    @Column({
        length : 100,
    })
    slug : string;

    @Column({
        type : "text",
        nullable : true
    })
    summary : string | null;

    @Column("smallint")
    published : number;

    @CreateDateColumn({
        type : "timestamptz"
    })
    createdAt : Date;

    @UpdateDateColumn({
        type : "timestamptz",
        nullable : true
    })
    updatedAt : Date | null;

    @Column({
        type : "timestamptz",
    })
    publishedAt : Date | null;

    @Column({
        type : "text"
    })
    content : string;

    @ManyToOne(() => User , (user) => user.posts , {
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
    })
    @JoinColumn({
        referencedColumnName : "id",
        name : "userId"
    })
    user : User

    @OneToMany(() => PostComment , (postComment) => postComment.post)
    comments : PostComment[]

    @OneToMany(() => PostMeta , (postMeta) => postMeta.post)
    meta : PostMeta

    @ManyToMany(() => PostCategory , (postCategory) => postCategory.posts)
    categories : PostCategory[]

    @ManyToMany(() => PostTag , (postTag) => postTag.posts)
    tags : PostTag[]

}