import { getModelForClass, prop, Ref } from "@typegoose/typegoose";


export enum UserRole {
  ADMIN = "Admin",
  EMPLOYEE = "Employee",
  CUSTOMER = "Customer",
  SUPERADMIN  = "SuperAdmin"

}

export class User {


  @prop({ trim: true })
  userName: string;

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

  @prop({ enum: UserRole ,default: UserRole.EMPLOYEE})
  role: UserRole;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}


export const UserModel = getModelForClass(User, {
    schemaOptions: { timestamps: true },
});
