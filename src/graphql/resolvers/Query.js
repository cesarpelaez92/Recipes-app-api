import Recipe from '../../models/recipeSchema'
import User from '../../models/userSchema'

const Query = {
  async allRecipes () {
    const recipes = await Recipe.find();
    return recipes
  },
  async readRecipe(root, {_id}) {
    return await Recipe.findById(_id);
  },

  async allUsers () {
    const user = await User.find();
    return user
  },
  async readUser(root, {_id}) {
    return await User.findById(_id);
  },
  async findUserByEmail(root, {email}) {
    return await User.findOne({email: email});
  },
}

export default Query;