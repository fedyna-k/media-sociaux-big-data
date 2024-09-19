import { google } from "googleapis";
import { Auth } from "../auth/auth.js";
import logger from "../asset/logger.js";

const youtube = google.youtube("v3");

export namespace Search {
  const maxResults: number = 10;

  export async function videos(query: string) {
    const response = await getVideos(query);
    const videos = response.data.items;
    const videoIds = videos.map(video => video.id.videoId);
    const rawStats = await getVideosStatistics(videoIds);
    
    logger.info({
      message: `Successfully requested videos for query: "${query}"`,
      location: "Search.videos"
    });

    return rawStats.data.items;
  }

  async function getVideos(query: string) {
    return await youtube.search.list({
      key: Auth.getAPIKey(),
      q: query,
      part: ["snippet"],
      order: "relevance",
      type: ["video"],
      maxResults
    });
  }

  async function getVideosStatistics(ids: string[]) {
    return await youtube.videos.list({
      key: Auth.getAPIKey(),
      id: ids,
      part: ["snippet", "statistics", "contentDetails", "status"],
      maxResults
    });
  }
}
