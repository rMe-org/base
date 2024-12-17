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
    songs: [
      {
        id: "3",
        name: "Cruel Summer",
        artist: "Taylor Swift",
        album: "Lover",
        duration: 178,
        cover: "https://i.scdn.co/image/ab67616d00004851e5d6e2242f8a6ec72cf82094",
        url: "#"
      },
      {
        id: "4",
        name: "Style",
        artist: "Taylor Swift",
        album: "1989",
        duration: 231,
        cover: "https://i.scdn.co/image/ab67616d000048514519239e9f428fc96c41d934",
        url: "#"
      },
      {
        id: "5",
        name: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989",
        duration: 219,
        cover: "https://i.scdn.co/image/ab67616d000048514519239e9f428fc96c41d934",
        url: "#"
      }
    ],
    createdAt: new Date()
  }
];
