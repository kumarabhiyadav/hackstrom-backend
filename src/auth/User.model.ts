import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export enum UserRole {
  HOD = "HOD",
  PROFESSOR = "PROFESSOR",
  STUDENT = "STUDENT",
}

export class User {
  @prop({ trim: true })
  name: string;

  @prop()
  phone: string;

  @prop({ default: "91" })
  countryCode: string;

  @prop({ trim: true })
  email: string;

  @prop({ trim: true })
  password: string;

  @prop()
  avatar?: string;

  @prop()
  fcmTokens: [string];

  @prop({ enum: UserRole, default: UserRole.STUDENT })
  role: UserRole;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});
