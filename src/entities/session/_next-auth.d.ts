/* eslint-disable @typescript-eslint/no-empty-object-type */
// import { SharedSession, SharedUser } from "../../domain/user";
// import NextAuth from "next-auth";

import { UserEntity } from "./_domain/types";

// export type UserId = string;
// export type Role = "ADMIN" | "USER";

// export const ROLES: Record<Role, Role> = {
//   ADMIN: "ADMIN",
//   USER: "USER",
// };

// export type SharedUser = {
//   id: UserId;
//   email: string;
//   role: Role;
//   emailVerified?: Date | null;
//   name?: string | null;
//   image?: string | null;
// };

// export type SharedSession = {
//   user: {
//     id: UserId;
//     email: string;
//     role: Role;
//     name?: string | null;
//     image?: string | null;
//   };
//   expires: string;
// };

declare module "next-auth" {
  interface Session {
    user: SessionEntity["user"];
  }

  interface User extends UserEntity {}
}
