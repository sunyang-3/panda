// JavaScript

const items = document.querySelectorAll('.img-item');

// console.log(items);
// console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}

// forEach文
// items.forEach((item, i) => {

//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 50px', 0],
//     filter: ['blur(10px)', 'blur(0)'],
//   };
  
//   const options = {
//     duration: 600,
//     delay: i * 400,
//     fill: 'forwards',
//   };

//   item.animate(keyframes, options);
// });

const map = L.map('map').setView([39.908744018275705, 116.39753328092834], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([39.908744018275705, 116.39753328092834], { icon: whiteIcon }).addTo(map)
  .bindPopup('天安門<br><img src="images/IMG_5852.jpg" alt="img">');
  L.marker([39.92509208757046, 116.39671291338266], { icon: pinkIcon }).addTo(map)
  .bindPopup('景山公園<br><img src="images/IMG_5596.jpg" alt="img">');

L.marker([39.87118262562908, 116.35622844048203], { icon: pinkIcon }).addTo(map)
  .bindPopup('大観園<br><img src="images/IMG_6239.jpg" alt="img">');
  L.marker([39.91109067143356, 116.41130896919746], { icon: pinkIcon }).addTo(map)
  .bindPopup('王府井歩行街<br><img src="images/IMG_5671.jpg" alt="img">');
  L.marker([39.994482366585025, 116.39343960675875], { icon: pinkIcon }).addTo(map)
  .bindPopup('北京オリンピックスタジアム<br><img src="images/IMG_5348.jpg" alt="img">');
  L.marker([39.810423044553936, 116.49799099160636], { icon: pinkIcon }).addTo(map)
  .bindPopup('博大公園<br><img src="images/IMG_5572.jpg" alt="img">');
  L.marker([39.90582671721067, 116.64836634756867], { icon: pinkIcon }).addTo(map)
  .bindPopup('UNIVERSAL STUDIOS BEIJING<br><img src="images/IMG_6247.jpg" alt="img">');
  L.marker([39.939694390398806, 116.33934054232931], { icon: pinkIcon }).addTo(map)
  .bindPopup('🐼<br><img src="images/IMG_5987.jpg" alt="img">');
  L.marker([40.4320301980758, 116.57022469630542], { icon: pinkIcon }).addTo(map)
  .bindPopup('万里の長城<br><img src="images/IMG_6082.jpg" alt="img">');