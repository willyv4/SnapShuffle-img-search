import { createClient } from "pexels";
import Config from "../config.json";

const client = createClient(Config.APIKEY);

class imgApi {
  static async getPhotosByName(searchQuery) {
    try {
      const { photos } = await client.photos.search({
        query: searchQuery,
        per_page: 24,
      });
      return photos;
    } catch (error) {
      console.error("Error fetching photos:", error);
      return [];
    }
  }
}

export default imgApi;
