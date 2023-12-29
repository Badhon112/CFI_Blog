import User from "../model/user.js";

export const signupUser = async (request, response) => {
  try {
    const user= request.body;
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ msg: "Signup successfully" });
  } catch (error) {
    return response.status(500).json({Message:"Error while Sign up the User"})
  }
};
