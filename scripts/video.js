    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    fetch('videos.json')
      .then(res => res.json())
      .then(videos => {
        const title = getQueryParam('title');
        if (!title) {
          document.body.innerHTML = '<p>Pas de vidéo sélectionnée</p>';
          return;
        }
        const video = videos.find(v => v.title === title);
        if (!video) {
          document.body.innerHTML = '<p>Vidéo non trouvée</p>';
          return;
        }

        document.getElementById('title').innerHTML = video.title;

        // Embed YouTube iframe preview
        const iframe = document.createElement('iframe');
        iframe.height = 500;
        iframe.src = video.link;
        iframe.frameBorder = 0;
        iframe.className = "youtube-video"
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        document.getElementById('video-container').appendChild(iframe);

        // Show code with syntax highlight
        const codeEl = document.getElementById('code');
        codeEl.textContent = video.code;

        hljs.highlightElement(codeEl);

      });

