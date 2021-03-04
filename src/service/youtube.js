class Youtube {
  constructor(key) {
    this.key = key;
  }

  async mostPopular() {
    return await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`
    ) //
      .then((res) => res.json())
      .then((result) => result.items);
  }
  async search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&key=${this.key}`
    ) //
      .then((res) => res.json())
      .then((result) => result);
  }
  async relate(video) {
    return await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video}&type=video&maxResults=10&key=${this.key}`
    ) //
      .then((res) => res.json())
      .then((result) => result);
  }
}

export default Youtube;
