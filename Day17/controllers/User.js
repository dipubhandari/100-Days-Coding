class UserController {
  static showData = async (req, res) => {
    try {
      res.send("Welcome Home!");
    } catch (error) {
      console.log(error);
      res.send("Welcome Home!");
    }
  };
}

export default UserController;
