import express from "express";
import { Search } from "../api/search.js";
import { VideoParser } from "../parser/video.js";
import logger from "../asset/logger.js";

const VideoRouter = express.Router();

VideoRouter.get("/:query", async (req, res) => {
  const requestedType = req.query.type ?? "json";
  if (requestedType != "csv" && requestedType != "json") {
    logger.warn({
      message: `Requested type that doesn't exist: "${requestedType}".`,
      location: "VideoRouter GET /:query"
    });

    return res.status(400).send({
      error: "Bad request",
      reason: `Requested type must be "csv", "json" or unset.`
    });
  }

  const query = await Search.videos(req.params.query);
  const parser = new VideoParser(query);
  const parsedResult = parser.parse({ type: requestedType });

  logger.info({
    message: "Returning result to requester.",
    location: "VideoRouter GET /:query"
  });

  return res.status(200).send({
    query: req.params.query,
    type: requestedType || "json",
    result: requestedType == "csv" ? parsedResult : JSON.parse(parsedResult)
  });
})

export { VideoRouter };