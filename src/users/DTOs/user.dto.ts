import { Expose } from "class-transformer";

export class userDTO {
  @Expose()
  id: number;

  @Expose()
  email: string;
}