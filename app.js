console.log ("Hi My Name Is Hunain");


var video = document.getElementById("myvideo");
        var btn = document.getElementById("watch");

        function playVideo() {
            if (video.paused) {
                video.play();
                btn.querySelector('.fa').classList.replace('fa-play-circle', 'fa-pause-circle');
            } else {
                video.pause();
                btn.querySelector('.fa').classList.replace('fa-pause-circle', 'fa-play-circle');
            }
        }