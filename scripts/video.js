function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

fetch('content.yaml')
  .then(res => res.text())
  .then(text => {
    const videos = jsyaml.load(text);
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

    document.getElementById('title').textContent = video.title;
    document.getElementById('description').textContent = video.description;

    // Embed YouTube iframe preview
    const iframe = document.createElement('iframe');
    iframe.height = 500;
    iframe.src = video.link;
    iframe.frameBorder = 0;
    iframe.className = "youtube-video";
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    document.getElementById('video-container').appendChild(iframe);

    // Affiche le contenu code s’il existe
    if (Array.isArray(video.content)) {
      video.content.forEach(item => {
        if (item.type === 'code') {
                   const h3 = document.createElement('h3');
          h3.style.display = "flex";
          h3.style.justifyContent = "space-between";
          h3.style.alignItems = "center";

          const titleSpan = document.createElement('span');
          titleSpan.textContent = "</> Code : " + item.title;

          const copyButton = document.createElement('button');
          copyButton.textContent = "Copier";
          copyButton.className = "copy-button";

          // Ajout du comportement de copie
          copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(item.value).then(() => {
              copyButton.textContent = "Copié !";
              setTimeout(() => {
                copyButton.textContent = "Copier";
              }, 2000);
            }).catch(err => {
              console.error("Erreur lors de la copie :", err);
            });
          });

          const pre = document.createElement('pre');
          const code = document.createElement('code');
          code.innerHTML = item.value;
          code.className = item.language;

          h3.appendChild(titleSpan);
          h3.appendChild(copyButton);

          document.querySelector('main').appendChild(h3);
          document.querySelector('main').appendChild(pre);
          pre.appendChild(code);

          hljs.highlightElement(code);
        }
      });

      const etVoila = document.createElement("h4");
      etVoila.textContent = "Et voilà ♥";
      document.querySelector('main').appendChild(etVoila);
    }
  })
  .catch(err => {
    console.error('Erreur chargement/parsing YAML:', err);
    document.body.innerHTML = '<p>Erreur lors du chargement de la vidéo.</p>';
  });
