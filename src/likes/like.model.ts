import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Post } from "../posts/Post.model";
import { User } from "../auth/User.model";

export class Like {

  @prop({ref: () => Post})
  post: Ref<Post>;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const LikeModel = getModelForClass(Like, {
  schemaOptions: { timestamps: true },
});
