import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  profilePicture: string;
}

const UserSchema = new mongoose.Schema<Users>({
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
  profilePicture: {
    type: String,
    required: [true, "User must have a profile picture"],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
