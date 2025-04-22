// document.querySelector('#zipForm').addEventListener('submit', getLocationInfo);

// document.querySelector('body').addEventListener('click', deleteLocation);

// function getLocationInfo(e) {
//     const zip = document.querySelector('.zip').Value;

//     fetch(`http://api.zippopotam.us/us/${zip}`)
//         .then(response => {
//             if (response.status != 200) {
//                 document.querySelector(`#output`).innerHTML = `<articl class="message is-danger"><div class="message-body">Invalid Zipcode, please try again</div></article>`;
//                 throw Error(response.statusText);
//             } else {
//                 return response.json();
//             }
//         })
//         .then(data => {
//             let output = '';
//             data.places.forEach(place => {
//                 output += `<article class="message is-primary">
//                 <div class="message-header">
//                 <P>Location Info</p> 
//                 <button class="delete"></button>
//                  </div>
//                   <div class="message-body">
//                    <ul>
//                     <li><strong>City: </strong>${place['place name']} </li> 
//                      <li><strong>State: </strong>${place['state']} </li> 
//                       <li><strong>Longitude: </strong>${place['longitude']} </li> 
//                        <li><strong>Latitude: </strong>${place['latitude']} </li>
//                         </ul>
//                          </div>
//                          </article>`;
//             });

//             document.querySelector('#output').innerHTML = output;
//         })
//         .catch(err => console.log(err));

//     e.preventDefault();
// }

// function showIcon(icon) {
//     document.querySelector('.icon-remove').style.display = 'none';
//     document.querySelector('.icon-check').style.display = 'none';
//     document.querySelector(`.icon-${icon}`).style.display = 'inline-flex';
// }

// function deleteLocation(e) {
//     if (e.target.className == 'delete') {
//         document.querySelector('.message').remove();
//         document.querySelector('.zip').value = '';
//         document.querySelector('.icon-check').remove();
//     }
// }



// ///////////////////////////////////////////////////////////////////////////////



const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Access webcam
navigator.mediaDevices.getUserMedia({video: true })
.then(stream => {
    video.srcobject = stream;
})
.catch(error => {
  alert("Error accessing webcam:" + error);
});

// Capture frame
function capturePhoto() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}