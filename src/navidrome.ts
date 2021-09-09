import { Encryption } from "./encryption";
import { Credentials, MusicService } from "./music_service";
import { DEFAULT, StreamClientApplication, Subsonic } from "./subsonic";

export class Navidrome implements MusicService {
  url: string;
  encryption: Encryption;
  subsonic: Subsonic;

  constructor(
    url: string,
    encryption: Encryption,
    streamClientApplication: StreamClientApplication = DEFAULT
  ) {
    this.url = url;
    this.encryption = encryption;
    this.subsonic = new Subsonic(
      "Navidrome",
      this.url,
      this.encryption,
      streamClientApplication
    );
  }

  generateToken = async (credentials: Credentials) =>
    this.subsonic.generateToken(credentials);

  async login(token: string) {
    return this.subsonic.login(token).then(ss => ({
      artists: ss.artists,
      artist: ss.artist,
      albums: ss.albums,
      album: ss.album,
      tracks: ss.tracks,
      track: ss.track,
      genres: ss.genres,
      stream: ss.stream,
      coverArt: ss.coverArt,
      nowPlaying: ss.nowPlaying,
      scrobble: ss.scrobble,
      searchArtists: ss.searchArtists,
      searchAlbums: ss.searchAlbums,
      searchTracks: ss.searchTracks,
      playlists: ss.playlists,
      playlist: ss.playlist,
      createPlaylist: ss.createPlaylist,
      deletePlaylist: ss.deletePlaylist,
      addToPlaylist: ss.addToPlaylist,
      removeFromPlaylist: ss.removeFromPlaylist,
      similarSongs: ss.similarSongs,
      topSongs: ss.topSongs,
    }));
  }
}
