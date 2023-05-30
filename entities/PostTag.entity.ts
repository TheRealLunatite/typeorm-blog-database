import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post.entity";

@Entity()
export class PostTag {
    @PrimaryGeneratedColumn({
        type : "bigint"
    })
    id : string;

    @Column({
        length : 75
    })
    title : string;
    
    @Column({
        length : 100,
        nullable : true
    })
    metaTitle : string;

    @Column({
        length : 100
    })
    slug : string;

    @Column({
        type : "text"
    })
    content : string;

    @ManyToMany(() => Post , (post) => post.tags)
    @JoinTable({
        name : "post__tag",
        joinColumns : [{
            name : "postId",
            referencedColumnName : "id",
        }],
        inverseJoinColumns : [{
            name : "tagId",
            referencedColumnName : "id"
        }]
    })
    posts : Post[]
    
}