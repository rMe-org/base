import { Playlist, Song } from "@/types/music";

let playlistsData: Playlist[] = [
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
        cover: "/album-covers/midnights.jpg",
        url: "#"
      },
      {
        id: "2",
        name: "Anti-Hero",
        artist: "Taylor Swift",
        album: "Midnights",
        duration: 200,
        cover: "/album-covers/midnights.jpg",
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
        cover: "/album-covers/lover.jpg",
        url: "#"
      },
      {
        id: "4",
        name: "Style",
        artist: "Taylor Swift",
        album: "1989",
        duration: 231,
        cover: "/album-covers/1989.jpg",
        url: "#"
      },
      {
        id: "5",
        name: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989",
        duration: 219,
        cover: "/album-covers/1989.jpg",
        url: "#"
      }
    ],
    createdAt: new Date()
  }
];

export const playlists = playlistsData;

export function createPlaylist(name: string, description?: string): Playlist {
  const newPlaylist: Playlist = {
    id: String(playlistsData.length + 1),
    name,
    description,
    imageUrl: "https://misc.scdn.co/liked-songs/liked-songs-640.png", // Default image
    owner: "Your Library",
    songs: [],
    createdAt: new Date()
  };
  
  playlistsData = [...playlistsData, newPlaylist];
  return newPlaylist;
}
