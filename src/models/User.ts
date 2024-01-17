import { Schema, models, model } from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  profilePicture: string;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "User must have a first name"],
  },
  lastName: {
    type: String,
    required: [true, "User must have a last name"],
  },
  username: {
    type: String,
    required: [true, "User must have a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
  },
  profilePicture: {
    type: String,
    required: [true, "User must have a profile picture"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
