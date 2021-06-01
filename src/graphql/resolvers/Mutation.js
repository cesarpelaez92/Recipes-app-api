import Recipe from '../../models/recipeSchema'
import User from '../../models/userSchema'
import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../../constants";

const Mutation = {
  async createRecipe(_, { input }) {
      const newRecipe = new Recipe(input)
      await newRecipe.save();
      return newRecipe;
  },
  async deleteRecipe(_, {_id}) {
    return await Recipe.findByIdAndDelete(_id);
  },
  async updateRecipe(_, {_id, input}) {
    return await Recipe.findByIdAndUpdate(_id, input);
  },

  async createUser(_, { input }) {
    const newUser = new User(input)
    await newUser.save();
    return newUser;
  },
  async deleteUser(_, {_id}) {
    return await User.findByIdAndDelete(_id);
  },
  async updateUser(_, {_id, input}) {
    return await User.findByIdAndUpdate(_id, input);
  },

  login: async (_, {email, password}, { res }) => {
    const user = await User.findOne({email: email, password: password})
    console.log(user)
    if (!user) {
      return null
    }

    const accessToken = sign({userId: user._id}, 'asdasdasd', {expiresIn: "15min"} )

    const refreshToken = sign(
      { userId: user._id, count: user.count },
      REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d"
      }
    );


    return user;
  }
}

export default Mutation