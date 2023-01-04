import { DataTypes, Model } from "sequelize";
import sequelize from "../db/sequelize";

export interface BasePost {
    title: string;
    body: string;
    publishedAt: Date; 
}

export interface CompletePost extends BasePost {
    id: number;
}

class Post extends Model<CompletePost> implements BasePost {

    public id!: number
    public body!: string
    public title!: string
    public publishedAt: Date = new Date();

}

Post.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publishedAt: {
        type: DataTypes.DATE
    }
},{timestamps: true, sequelize: sequelize})

export default Post