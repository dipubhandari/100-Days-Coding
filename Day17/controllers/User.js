import userModel from "../model/user.js";

class UserController {
  static showData = async (req, res) => {
    console.log("req.body:", req.body); // Add this line
    console.log("req.body.username:", req.body?.username);
    try {
      console.log("Data is displayed");
      res.send("Welcome Home!");
    } catch (error) {
      console.log(error);
    }
  };
  static createUser = async (req, res) => {
    try {
      const { username, fullName, address } = req.body;
      console.log(username, fullName, address);
      if (!(username && fullName && address)) {
        res.send("Hy Srijana, Please add proper data");
      } else {
        const createUser = userModel.create({
          username,
          fullName,
          address,
        });
        if (createUser) {
          console.log("User created success fully");
          res.send("User is Listed");
        } else {
          console.log("Something went wrong");
          res.send("Sorry..");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
