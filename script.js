document.addEventListener("DOMContentLoaded", function () {
    const videoSection = document.getElementById('video-section');
    const descriptionSection = document.getElementById('description-section');

    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            data.videos.forEach(video => {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';

                const videoElement = document.createElement('video');
                videoElement.src = `video/${video.filename}`;
                videoElement.controls = true;
                videoElement.preload = 'auto';
                videoElement.style.width = '100%';
                videoContainer.appendChild(videoElement);

                videoSection.appendChild(videoContainer);

                const descriptionContainer = document.createElement('div');
                descriptionContainer.className = 'description-container';

                const descriptionElement = document.createElement('div');
                descriptionElement.className = 'description';
                descriptionElement.textContent = video.description;
                descriptionContainer.appendChild(descriptionElement);

                descriptionSection.appendChild(descriptionContainer);
            });
        })
        .catch(error => console.error('Error fetching the videos:', error));
});
