$( document ).ready(function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState', player.playState);

  });

  $('button#next').click( function(){
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').click( function(){
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex >= album.songs.length) { return; }
    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    const totalTime = ( duration - currentTime );
    $('#time-control .current-time').text( player.prettyTime(currentTime) );
    $('#time-control .total-time').text( player.prettyTime(totalTime) );
    $('#time-control input').val(percent);
  }, 1000);

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  })




});
