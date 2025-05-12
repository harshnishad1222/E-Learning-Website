import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY); // no need for `await`, jwt.verify is synchronous unless using callback

    req.id = decoded.userId;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default isAuthenticated;
