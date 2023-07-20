import { Router } from "express";
import { Octokit} from "octokit";

import logger from "./utils/logger";

const octokit = new Octokit({});
await octokit.request("GET /octocat", {});


const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

export default router;
