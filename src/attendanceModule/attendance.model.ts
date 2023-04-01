import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";
import { Classroom } from "../classroomModule/classroom/classroom.model"

export class Attendance {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ ref: () => Classroom })
  classroom : Ref<Classroom>;


}

export const AttendanceModel = getModelForClass(Classroom, {
  schemaOptions: { timestamps: true },
});
