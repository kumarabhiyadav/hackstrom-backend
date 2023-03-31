import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { Post } from "../posts.model";

export class Comment {
  @prop({ trim: true })
  comment: string;

  @prop({ref: () => Post})
  post: Ref<Post>;


  @prop({ ref: () => User })
  user: Ref<User>;


  @prop({ default: false })
  isDeleted: boolean;
}

export const CommentModel = getModelForClass(Comment, {
  schemaOptions: { timestamps: true },
});
