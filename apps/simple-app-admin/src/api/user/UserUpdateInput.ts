import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
