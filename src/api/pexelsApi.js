import { createClient } from "pexels";
// this is a silly meaningless project will delete this soon -
const client = createClient(
  "7b1jocaLZh3J30hiDpRiHH353poU6bHFRCLWQ6EGI27agmtYUKBetseU"
);

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
