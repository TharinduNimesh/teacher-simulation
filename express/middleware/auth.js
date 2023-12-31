import jwt from 'jsonwebtoken';

export default function auth(req, res, next) {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.json(403);
        req.user = user;
        next();
    });
}