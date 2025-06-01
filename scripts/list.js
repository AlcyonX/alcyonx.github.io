fetch('content.yaml')
  .then(res => res.text())  // récupérer le YAML comme texte
  .then(text => {
    const videos = jsyaml.load(text); // parser YAML en objet JS
    const container = document.getElementById('container1');
    videos.forEach(video => {
      const div = document.createElement('div');

      const content = document.createElement("content");
      content.className = "content";

      const title = document.createElement('p');
      const btn = document.createElement('button');
      const img = document.createElement('img');

      btn.textContent = "Apprendre !";
      btn.onclick = () => {
        location.href = 'video.html?title=' + encodeURIComponent(video.title);
      };

      img.src = video.img;  // ne pas encoder, sinon image ne charge pas

      title.textContent = video.title;

      div.appendChild(img);
      content.appendChild(title);
      content.appendChild(btn);
      div.appendChild(content);
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Erreur chargement/parsing YAML:', err);
  });