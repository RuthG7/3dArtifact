
    var videoSources = [
      './Venus_Ext_16_US_Copilot_Moonstone Gray.mp4',
      '/video (2160p).mp4',
      '/Venus_Ext_16_US_Copilot_Moonstone Gray.mp4'
    ];
    var icons = [
      document.getElementById('icon1'),
      document.getElementById('icon2'),
      document.getElementById('icon3')
    ];
    var currentVideoIndex = 0;
  
    function showVideo(index) {
      currentVideoIndex = index;
      var videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.src = videoSources[currentVideoIndex];
      videoPlayer.load();
      videoPlayer.play();
      highlightIcon(currentVideoIndex);
      document.getElementById('radio' + (index + 1)).checked = true;
    }
  
    function highlightIcon(index) {
      icons.forEach(function(icon, i) {
        if (i === index) {
          icon.classList.add('highlight');
        } else {
          icon.classList.remove('highlight');
        }
      });
    }
  
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.addEventListener('ended', function() {
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      showVideo(currentVideoIndex);
    });
  
    // Call the function with the index of the first video
    showVideo(0);

    function toggleParagraph() {
      var paragraph = document.getElementById('dropdown-paragraph');
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    }