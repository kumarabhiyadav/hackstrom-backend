import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";

export class ClassRoom {
  @prop({ trim: true })
  name: string;

  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ClassRoomModel = getModelForClass(ClassRoom, {
  schemaOptions: { timestamps: true },
});
