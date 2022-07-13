import { db } from "~/database/connection.server";
import bcrypt from 'bcryptjs'

export async function resetPassword(userId: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    data: {
      password: hashedPassword
    },
    where: {
      id: userId
    }
  });

  return true;
}