
require(['bump-3'],function ($) {
  loadPlayers($);
});

function loadPlayers($) {

  var parameter = decodeURI(window.location.search.substring(1).split("=")[1]);
  var programs = JSON.parse(parameter).programs;

  var main = document.getElementsByClassName('main')[0];
  var list = document.getElementsByClassName('list')[0];

  var createMediaPlayer = function (programId, startTime, index){

    var settings = {
      product: 'news',
      responsive: true,
      playlistObject: {
        title: "Click",
        holdingImageURL: "https://ichef.bbci.co.uk/images/ic/640x360/p03hn64k.jpg",
        items: [{
          versionID: programId, //b0817f13
          duration: 1471
        }]
      },
      startTime: startTime, //1014
      statsObject: { clipPID: programId }
    }

    var newMediaPlayerDomElement = document.createElement('div');
    newMediaPlayerDomElement.id = "mediaPlayer" + index;
    newMediaPlayerDomElement.className = "mediaplayer";

    if( index === 1) {
      main.appendChild(newMediaPlayerDomElement);
    } else {
      list.appendChild(newMediaPlayerDomElement);
    }

    var mediaPlayer = $("#mediaPlayer" + index).player(settings);
    mediaPlayer.load();

  };

  for (var i=0; i < programs.length; i++){
    createMediaPlayer(programs[i].id, programs[i].starttime, i+1)
  }


};