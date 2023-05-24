import { verify } from "jsonwebtoken";

export default function prfileHandler(req, res) {

    console.log(req.cookies);

    const { myTokenName } = req.cookies

    try {
        const user = verify(myTokenName, 'secret')
        console.log(user);
        return res.json({ user: user.email, username: user.username });
    } catch (error) {
        return res.status(401).json({ error: 'Invalid Token' })
    }

}