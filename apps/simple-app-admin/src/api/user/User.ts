import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
