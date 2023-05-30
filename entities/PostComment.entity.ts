import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { Post } from "./Post.entity";

@Entity()
export class PostComment {
    @PrimaryGeneratedColumn({
        type : "bigint"
    })
    id : string;

    @Column("bigint")
    postId : string;

    @Column("bigint")
    userId : string;

    @Column("bigint" , { nullable : true })
    parentId : string | null;

    @ManyToOne(() => Post , (post) => post.comments , {
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
    })
    @JoinColumn({
        referencedColumnName : "id",
        name : "postId"
    })
    post : Post;

    @ManyToOne(() => User , (user) => user.comments)
    @JoinColumn({
        referencedColumnName : "id",
        name : "userId"
    })
    user : User

    @ManyToOne(() => PostComment , (postComment) => postComment.comments , {
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
    })
    @JoinColumn({
        referencedColumnName : "id",
        name : "parentId"
    })
    parent : PostComment
    
    @OneToMany(() => PostComment , (postComment) => postComment.parent)
    comments : PostComment[]

    @Column({
        length : 100
    })
    title : string;

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
        nullable : true
    })
    publishedAt : Date | null;

    @Column({
        type : "text"
    })
    content : string;
}