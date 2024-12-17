import { Playlist, Song } from "@/types/music";

export const playlists: Playlist[] = [
  {
    id: "1",
    name: "Liked Songs",
    description: "Your favorite tracks",
    imageUrl: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
    owner: "Your Library",
    songs: [
      {
        id: "1",
        name: "Midnight Rain",
        artist: "Taylor Swift",
        album: "Midnights",
        duration: 163,
        cover: "https://i.scdn.co/image/ab67616d00004851e8b66087164d79a1f5df6eb6",
        url: "#"
      },
      {
        id: "2",
        name: "Anti-Hero",
        artist: "Taylor Swift",
        album: "Midnights",
        duration: 200,
        cover: "https://i.scdn.co/image/ab67616d00004851e8b66087164d79a1f5df6eb6",
        url: "#"
      }
    ],
    createdAt: new Date()
  },
  {
    id: "2",
    name: "Daily Mix 1",
    description: "Taylor Swift, Ed Sheeran and more",
    imageUrl: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5a00969a4698c3132a15fbb0/1/en/default",
    owner: "Spotify",
    songs: [],
    createdAt: new Date()
  }
];
