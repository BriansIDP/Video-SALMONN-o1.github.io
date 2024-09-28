document.addEventListener("DOMContentLoaded", function () {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const videoSection = document.getElementById('video-section');
            const descriptionContainer = document.getElementById('description');

            data.videos.forEach(video => {
                // Create a container for each video and description
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';

                // Create video element
                const videoElement = document.createElement('video');
                videoElement.src = `video/${video.filename}`;
                videoElement.controls = true;
                videoElement.preload = 'none'; // Use 'none' or 'metadata' to improve loading

                videoElement.style.width = '100%';
                videoContainer.appendChild(videoElement);

                // Add video container to the video section
                videoSection.appendChild(videoContainer);

                // Create description element
                const descriptionElement = document.createElement('div');
                descriptionElement.className = 'description';
                descriptionElement.textContent = video.description;
                descriptionContainer.appendChild(descriptionElement);

                // Lazy load video on scroll
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            videoElement.preload = 'auto'; // Start loading video when in view
                            observer.unobserve(entry.target); // Stop observing
                        }
                    });
                });
                observer.observe(videoElement);
            });
        })
        .catch(error => console.error('Error fetching the videos:', error));
});
