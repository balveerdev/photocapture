
const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const captureBtn = document.getElementById('captureBtn');
    const saveBtn = document.getElementById('saveBtn');

    let photoTaken = false;

    // Step 1: Get webcam access
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(error => {
        alert('Webcam access error: ' + error);
        console.error(error);
      });

    // Step 2: Capture photo when Capture button is clicked
    captureBtn.onclick = function() {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      photoTaken = true;
      saveBtn.disabled = false; // Enable Save button after capture
    };

    // Step 3: Save photo when Save button is clicked
    saveBtn.onclick = function() {
      if (!photoTaken) {
        alert('Please capture a photo first!');
        return;
      }

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'photo.png';
      link.click();

      // Clear canvas after saving the photo
      context.clearRect(0, 0, canvas.width, canvas.height);
      photoTaken = false; // Reset photo taken flag
      saveBtn.disabled = true; // Disable save button again
    };

