import jwt from 'jsonwebtoken';
// interface JwtPayload {
//   username: string;
// }
// Middleware function to authenticate JWT token
export const authenticateToken = (req, res, next) => {
    // Get the authorization header from the request
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const secretKey = process.env.JWT_SECRET_KEY || '';
        // Verify the JWT token
        jwt.verify(token, secretKey, (err, _user) => {
            if (err) {
                return res.sendStatus(403); // Send forbidden status if the token is invalid
            }
            // Attach the user information to the request object
            // req.user = user as JwtPayload;
            return next(); // Call the next middleware function
        });
    }
    else {
        res.sendStatus(401);
    }
};