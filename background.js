chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: enablePiPForRunningVideo
    });
  });
  
  function enablePiPForRunningVideo() {
    const videos = document.querySelectorAll('video');
    if (videos.length > 0) {
      const video = Array.from(videos).find(v => !v.paused); // Find a running video
      if (video) {
        video.requestPictureInPicture()
          .catch(error => console.error('Error entering Picture-in-Picture mode:', error));
      } else {
        console.log('No running video found.');
      }
    } else {
      console.log('No video elements found on this page.');
    }
  }
  