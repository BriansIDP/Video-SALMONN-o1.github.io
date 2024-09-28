document.addEventListener("DOMContentLoaded", function () {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const videoSection = document.getElementById('video-section');
            const descriptionContainer = document.getElementById('description');

            data.videos.forEach(video => {
                // Create video element
                const videoElement = document.createElement('video');
                videoElement.src = `video/${video.filename}`;
                videoElement.controls = true;
                videoElement.style.width = '100%';
                videoSection.appendChild(videoElement);

                // Create description element
                const descriptionElement = document.createElement('div');
                descriptionElement.className = 'description';
                descriptionElement.textContent = video.description;
                descriptionContainer.appendChild(descriptionElement);
            });
        })
        .catch(error => console.error('Error fetching the videos:', error));
});
