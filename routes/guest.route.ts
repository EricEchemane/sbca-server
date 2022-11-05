import getDbConnection from "@db/db-connection";
import { RequestError } from "@utils/request";
import normalize from "@utils/response-normalizer";
import { Router, Request, Response } from "express";

const guestRoute = Router();

guestRoute.post("/", normalize(async (req: Request, _: Response) => {
    const { fullName, pusposeOfVisit } = req.body;
    if (!fullName || !pusposeOfVisit) throw new RequestError(400, "Please provide a name and purpose of visit");

    const db = await getDbConnection();
    const { Guest } = db.models;

    const guest = new Guest({ fullName, pusposeOfVisit });
    await guest.save();

    return guest;
}));

export default guestRoute;