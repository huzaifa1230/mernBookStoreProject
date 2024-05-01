import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // to secure passwords from database (hide passwords in db)
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid creadentials" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid creadentials" });
    }
    res.status(200).json({
      message: "User logged in",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    // try {
    //   const { email, password } = req.body;
    //   const user = await User.findOne({ email });
    //   const isMatch = await bcryptjs.compare(password, user.password);
    //   if (!user || !isMatch) {
    //     return res.status(400).json({ message: "invalid creadentials" });
    //   } else {
    //     res.status(200).json({
    //       message: "User logged in",
    //       user: {
    //         _id: user._id,
    //         fullname: user.fullname,
    //         email: user.email,
    //       },
    //     });
    //   }
    // }
    console.log("error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
