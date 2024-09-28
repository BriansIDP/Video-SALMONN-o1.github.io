document.addEventListener("DOMContentLoaded", function () {
    const contentRow = document.getElementById('content-row');

    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            data.videos.forEach(video => {
                const pairContainer = document.createElement('div');
                pairContainer.className = 'video-description-pair';

                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-section';

                const videoElement = document.createElement('video');
                videoElement.src = `video/${video.filename}`;
                videoElement.controls = true;
                videoElement.preload = 'auto';
                videoElement.style.width = '100%';
                videoContainer.appendChild(videoElement);

                const descriptionContainer = document.createElement('div');
                descriptionContainer.className = 'description-section';

                const descriptionElement = document.createElement('div');
                descriptionElement.className = 'description';
                descriptionElement.textContent = video.description;
                descriptionContainer.appendChild(descriptionElement);

                pairContainer.appendChild(videoContainer);
                pairContainer.appendChild(descriptionContainer);

                contentRow.appendChild(pairContainer);
            });
        })
        .catch(error => console.error('Error fetching the videos:', error));
});
