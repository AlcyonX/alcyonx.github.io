fetch('videos.json')
    .then(res => res.json())
    .then(videos => {
    const container = document.getElementById('container1');
    videos.forEach(video => {

        const div = document.createElement('div')

        const content = document.createElement("content")
        content.className = "content"

        const title = document.createElement('p')
        const btn = document.createElement('button');
        const img = document.createElement('img')

        btn.textContent = "Apprendre !";
        btn.onclick = () => {
            location.href = 'video.html?title=' + encodeURIComponent(video.title);
        };

        img.src = encodeURIComponent(video.img)

        title.textContent = video.title
        
        div.appendChild(img)
        content.appendChild(title)
        content.appendChild(btn)
        div.appendChild(content)
        container.appendChild(div);
    });
});