
require(['bump-3'],function ($) {
  loadPlayers($);
});

function loadPlayers($) {

  var main = document.getElementsByClassName('main')[0];
  var list = document.getElementsByClassName('list')[0];


  //Search

  var searchBar = document.getElementById("searchBar_input");

  searchBar.addEventListener('keyup', function(e){


    if (e.keyCode === 13){


      $.ajax( {
        url : 'http://tplayer.jexworld.co.uk/app/search/?words=' + e.target.value,
        dataType: "json",
        contentType: false,
        processData: false,
        success: function(data) {

          var response = data[0];
          var pid = response.href.split("=")[1];

          var index=0;
          document.getElementsByClassName("main")[0].innerHTML = "";
          document.getElementsByClassName("list")[0].innerHTML = "";


          response.words.map( (word) => {

            var settings = {
              product: 'news',
              responsive: true,
              playlistObject: {
                title: "Click",
                holdingImageURL: "https://ichef.bbci.co.uk/images/ic/640x360/p03hn64k.jpg",
                items: [{
                  versionID: pid, //b0817f13
                  duration: 1471
                }]
              },
              startTime: parseInt(word.intime) -2, //1014
              statsObject: { clipPID: pid }
            };

            var mediaElement = document.createElement('div');

            var labelElement = document.createElement('label');
            labelElement.innerHTML = word.intime;

            mediaElement.id = "mediaPlayer" + (++index);

            if( index === 1) {
              mediaElement.className = "mediaplayermain";
              main.appendChild(mediaElement);
              labelElement.className = "mediaplayermainlabelmain";
              main.appendChild(labelElement);
            } else {
              mediaElement.className = "mediaplayerlist";
              list.appendChild(mediaElement);
              //labelElement.className = "mediaplayermainlabellist";
              //list.appendChild(labelElement);
            }

            var mediaPlayer = $("#mediaPlayer" + index).player(settings);
            mediaPlayer.load();

        });


        },
        error: function(xhr, ajaxOptions, thrownError) {
          console.log(xhr.status + " " + ajaxOptions + " " + thrownError);
        }
      });

      //var response = '[{"clipid":"9","clipname":"9.pokemon.json","title":"Click: Pokemon","synopsis":"This edition of Click goes down under at one of the world\'s toughest drone challenges. Plus tech to keep safe and augmented reality glasses with Pokemon Go. Includes tech news.","credit":"BBC","transcript":"this is the headquarters in san francisco a company called o. d. g. it\'s here it manufactures and ale headset called the r. seven at the moment this augmented reality device is primarily at all for the workplace the glasses are self contained head warden computer running a version of the android operating system but a lot of industries recognised the potential of they are the technology has had difficulty getting traction mainstream consumers that was until earlier this summer when a lot of people and pocket monster mad pocket mungo pokemon go and snapshot snapchat of change is that the consumer\'s ready for a grant of reality we just have to present the right platform holding a former model device makes a hand tired and you you do it once in a while and then he loses its charm l. went really classic immerses you in as your reality digital world so once apart from exist people adopt one of the developers here thought why not adapt poke pokemon him on go game designed to work on smartphones for this headset after about an hour of fiddling around with the code that\'s exactly what he managed and it\'s exactly what i can see right now sneaky sneaky poking pokemon her art there you are my ball looking for poke pokemon on inside an office is o.k. but the real test of this bit of kit is to take it outside and now of course all the games visuals are on the headset in front of me which means i\'ve got far less chance of actually walking into any and are you you pokemon won\'t go on this head there is a bit of fun really just over two thousand pounds they\'re not cheap but that\'s because they\'re designed for industrial use what this does prove there is the potential of augmented reality technology for consumers now if you\'ll excuse me.","href":"9.pokemon.pid=b0817f13","words":[{"clipid":"9","text":"pokemon","intime":"37.88","outtime":"38.72","speakerid":"1"},{"clipid":"9","text":"pokemon","intime":"66.59","outtime":"67.19","speakerid":"3"},{"clipid":"9","text":"pokemon","intime":"85.79","outtime":"87.43","speakerid":"4"},{"clipid":"9","text":"pokemon","intime":"96.83","outtime":"97.34","speakerid":"3"},{"clipid":"9","text":"pokemon","intime":"132.06","outtime":"132.37","speakerid":"3"}]}]';
      //var main = document.getElementsByClassName('main')[0];
      //main.innerHTML = response;



    }
  })

};