import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";

export class Post {
  @prop({ trim: true })
  title: string;

  @prop({})
  photo: string;

  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ required: true, default: 0 })
  likeCounts: number;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;

  @prop({})
  liked: boolean;

  @prop({})
  commentCounts: boolean;
}

export const PostModel = getModelForClass(Post, {
  schemaOptions: { timestamps: true },
});
