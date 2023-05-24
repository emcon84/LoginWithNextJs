import { serialize } from "cookie";
import { verify } from "jsonwebtoken";

export default function logoutHandler(req, res) {

    const { myTokenName } = req.cookies;

    if (!myTokenName) {
        res.status(401).json({ message: 'no token exists' })
    }

    try {
        verify(myTokenName, 'secret');
        const serialized = serialize('myTokenName', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialized)
        res.status(200).json({ message: 'logged successfully' })
    } catch (error) {
        res.status(401).json({ message: 'invalid token' })

    }


}
