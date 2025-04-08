let arrayOfHealthTips = [];

fetch('js/health-tips.json')
    .then(response => response.json())
    .then(data => {
        arrayOfHealthTips = data; 
    })
    .catch(error => {
        console.error("Error loading health tips JSON:", error);
    });

let countOfPills = 5;
document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills);

function updatePillDisplay() {
    document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills);
}

document.getElementById('btn_health_wishes').addEventListener('click', function() {
    if (countOfPills > 0) {
        if (arrayOfHealthTips.length > 0) {
            let index = Math.floor(Math.random() * arrayOfHealthTips.length);
            document.getElementById('health-wishes').innerText = arrayOfHealthTips[index];
            countOfPills--;
            updatePillDisplay();
        } else {
            document.getElementById('health-wishes').innerText = "Health tips are not loaded yet.";
        }
    }
    if (countOfPills === 0) {
        document.getElementById("btn_health_wishes").disabled = true;
        document.getElementById("btn_health_wishes").innerText = "Get more health tips!";
    }
});

document.getElementById("health-wishes-footer").addEventListener("click", function() {
    countOfPills = 5;
    updatePillDisplay();
    document.getElementById("btn_health_wishes").innerText = "Take a health wish";
    document.getElementById("btn_health_wishes").disabled = false;
});



 const arrayOfImages = [ 
     "main-image.png", 
     "2.jpg", 
     "3.jpg", 
     "4.jpg" 
     ]; 
document.getElementById('btn_health_wishes').addEventListener('click', () => { 
    let index = Math.floor(Math.random() * arrayOfHealthTips.length)
    document.getElementById("health-wishes").innerText = arrayOfHealthTips[index] 
    }); 
let galleryImage = 1 
document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage - 1]}`)
document.getElementById('right-arrow').addEventListener('click', () => { 
    galleryImage++; 
    console.log(galleryImage); 
    if (galleryImage > arrayOfImages.length) galleryImage = 1
    document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage - 1]}`) 
}); 
document.getElementById('left-arrow').addEventListener('click', () => { 
    galleryImage--
    console.log(galleryImage)
                  
    if (galleryImage === 0) galleryImage = 3
    document.getElementById("main-image").setAttribute('src', `img/gallery/${arrayOfImages[galleryImage - 1]}`)   
});



fetch('js/vitamins.json')
    .then(response => response.json())
    .then(data => {

         data.forEach((item, index) => {
  
            let divVitamin = document.createElement("div");
            divVitamin.classList.add("vitamin");
  
            divVitamin.innerHTML = `
                 <span>${item.id}</span>
                 <h3>${item.title}</h3>
                 <hr>
                 <img src="img/vitamins/${item.photo}" alt="" onerror="this.oneerror =  null; this.src="img/vitamins/default.png">
                 <p>${item.description}</p>
                 
                 <div>
                    <img src="img/vitamins/${item.schema}" alt="Scheme is empty!" onerror="this.oneerror =  null; this.src="img/vitamins/defaultScheme.png">
                       <span>${"💊".repeat(item.rating) + "❌".repeat(5 - item.rating)}</span>
                       <p class="type-text">${item.type}</p>
                 </div>
                 `;
            document.getElementById("p-vitamin").appendChild(divVitamin);
  })
})
.catch(error => {
    console.error("Download error! JSON:", error);
});