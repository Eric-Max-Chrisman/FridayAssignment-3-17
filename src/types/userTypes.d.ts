type AuthRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

type UserIdParam = {
  targetUserId: string;
};

type ChangeNameParam = {
  userId: string;
  firstName: string;
  lastName: string;
}
