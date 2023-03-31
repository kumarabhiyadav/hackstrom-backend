import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { Post } from "../posts.model";

export class Like {
  @prop({ ref: () => Post })
  post: Ref<Post>;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const LikeModel = getModelForClass(Like, {
  schemaOptions: { timestamps: true },
});
