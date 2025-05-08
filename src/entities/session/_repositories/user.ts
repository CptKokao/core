import { dbClient } from "@/shared/lib/db";
import { UserEntity } from "../_domain/types";

export class UserRepository {
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await dbClient.user.create({
      data: user,
    });
  }

  //   async getUsersList(): Promise<SharedUser[]> {
  //     return await dbClient.user.findMany();
  //   }

  //   async getUserById(id: UserId): Promise<SharedUser | undefined> {
  //     return await dbClient.user
  //       .findUnique({ where: { id } })
  //       .then((r) => r ?? undefined);
  //   }
}

export const userRepository = new UserRepository();
