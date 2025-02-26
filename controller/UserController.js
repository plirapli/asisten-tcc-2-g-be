import User from "../models/UserModel.js";

// GET (Ngambil Data)
async function getUser(req, res) {
  try {
    const result = await User.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

export { getUser };

// POST

// PUT/PATCH

// DELETE
