
// Access video and canvas elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Request webcam access
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing the webcam:', error);
    });

// Capture the photo and draw it to the canvas
function capturePhoto() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Save Photo 

function savePhoto() {
    const image = canvas.toDataURL("image/png"); // Get image data
    const link = document.createElement('a');
    link.href = image;
    link.download = 'photo.png';
    link.click();
}

