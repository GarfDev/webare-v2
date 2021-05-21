import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  uuid: string;
  platform: string;
}

const UserSchema: Schema = new Schema({
  uuid: { type: String, require: true, unique: true },
  platform: { type: String, require: true },
});

export default mongoose.model<IUser>('Users', UserSchema);
