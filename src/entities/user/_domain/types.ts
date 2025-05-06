/** @deprecated use from kernel */
export type UserId = string;
/** @deprecated use from kernel */
export type Role = "ADMIN" | "USER";

/** @deprecated use ROLES from shared */
export const ROLES: Record<Role, Role> = {
  ADMIN: "ADMIN",
  USER: "USER",
};

/** @deprecated use ShaeredUser */
export type UserEntity = {
  id: UserId;
  email: string;
  role: Role;
  emailVerified?: Date | null;
  name?: string | null;
  image?: string | null;
};

/** @deprecated use SharedSession */
export type SessionEntity = {
  user: {
    id: UserId;
    email: string;
    role: Role;
    name?: string | null;
    image?: string | null;
  };
  expires: string;
};

// Projetions

export type Profile = {
  email: string;
  name?: string | null;
  image?: string | null;
};
