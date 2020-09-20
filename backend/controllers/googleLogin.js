import { asyncHandler } from "../middleware/async";
import { OAuth2Client } from "google-auth-library";
import { User } from "../models/User";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

export const login = asyncHandler(async (req, res, next) => {
  const { tokenId } = req.body;

  const response = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT,
  });

  const {
    email_verified,
    given_name,
    family_name,
    email,
    picture,
  } = response.payload;

  if (email_verified) {
    const candidate = await User.findOne({ email });

    if (candidate) {
      const { email, firstName, lastName, avatar } = candidate;
      return res.send({
        email,
        firstName,
        lastName,
        avatar,
        loggedIn: true,
        tokenId,
      });
    }

    const user = new User({
      email,
      firstName: given_name,
      lastName: family_name,
      avatar: picture,
      tokenId,
      savedList: [],
    });

    await user.save();
    res.send({ ...user, loggedIn: true });
  } else
    next({
      status: 400,
      message: "Something went wrong while trying authorize with google",
    });
});
