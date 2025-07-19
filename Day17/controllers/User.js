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
}

export default UserController;
