import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";

export class Classroom {
  @prop({ trim: true })
  classroomName: string;

  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ClassroomModel = getModelForClass(Classroom, {
  schemaOptions: { timestamps: true },
});
