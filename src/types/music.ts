export interface Song {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  url: string;
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  imageUrl: string;
  owner: string;
  songs: Song[];
  createdAt: Date;
}
