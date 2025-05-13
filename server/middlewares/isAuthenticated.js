import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    // Match the cookie name set in generateToken()
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated. Token missing.",
        success: false,
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Attach decoded info (userId) to request
    req.id = decoded.userId;

    next(); // Proceed
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired. Please log in again.",
        success: false,
      });
    }

    return res.status(401).json({
      message: "Invalid or expired token.",
      success: false,
    });
  }
};

export default isAuthenticated;
