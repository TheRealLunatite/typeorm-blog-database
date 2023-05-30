import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post.entity";

@Entity()
export class PostCategory {
    @PrimaryGeneratedColumn({
        type : "bigint"
    })
    id : string;

    @Column({
        type : "bigint",
        nullable : true
    })
    parentId : string | null;

    @Column({
        length : 75
    })
    title : string;

    @Column({
        length : 100,
        nullable : true
    })
    metaTitle : string | null;

    @Column({
        length : 100
    })
    slug : string;

    @Column({
        type : "text",
        nullable : true
    })
    content : string | null;

    @ManyToOne(() => PostCategory , (postCategory) => postCategory.categories , {
        onDelete : "RESTRICT",
        onUpdate : "RESTRICT"
    })
    @JoinColumn({
        referencedColumnName : "id",
        name : "parentId"
    })
    parent : PostCategory

    @OneToMany(() => PostCategory , (postCategory) => postCategory.parent)
    categories : PostCategory[]

    @ManyToMany(() => Post , (post) => post.categories)
    @JoinTable({
        name : "post__category",
        joinColumns : [{
            name : "postId",
            referencedColumnName : "id"
        }],
        inverseJoinColumns : [{
            name : "categoryId",
            referencedColumnName : "id"
        }]
    })
    posts : Post[]
}