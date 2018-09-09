var playlist = {
  name: "Bruno Mars",
  title: "Finesse"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  
  return playlist
}