import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Classroom } from "../classroom.model";

export class ClassroomContent {
  @prop({ ref: () => Classroom })
  classroomId: Ref<Classroom>;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  startTime: Date;

  @prop({ default: 0 })
  endTime: Date;

  @prop({ default: ""})
  resourceURL: String;
}

export const ClassroomContentModel = getModelForClass(ClassroomContent, {
  schemaOptions: { timestamps: true },
});
