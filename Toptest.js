$(function(){ $("#playlist sagheeronline").on("click", function() { var player = videojs('my-video'); player.pause(); var link ="https://top10tv.tk/fliixtv.php?c=https://cdn5.jazztv.pk:8087/jazzauth/"; var q ="/playlist.m3u8"; player.poster = "http://img.youtube.com/vi/"+new_url+"/maxresdefault.jpg"; var new_url = $(this).attr("so-url"); player.src({ type: 'video/mp4', src: link+new_url+q }); player.load(); player.play(); }); });
