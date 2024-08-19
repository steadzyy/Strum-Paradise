import { z } from "zod";
import db from "../config/mongodb";
import { hashPassword } from "../helpers/bcrypt";

const UserSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(6),
});

type TypeUser = z.infer<typeof UserSchema>;

class User {
  static collection() {
    return db.collection<TypeUser>("users");
  }

  static async getuserByUsername(username: string) {
    const user = await this.collection().findOne({
      username,
    });
    return user
  }
  static async getUserByEmail(email: string){
    const user = await this.collection().findOne({
        email
    })
    // console.log(user, '<<USER>>');
    
    return user
  }
  static async create(payload: TypeUser){
    const saveParse = UserSchema.safeParse(payload);
    if(!saveParse.success){
        throw saveParse.error
    }
    payload.password = hashPassword(payload.password)
    await this.collection().insertOne(payload)
    return "success register"
  }
}


export default User