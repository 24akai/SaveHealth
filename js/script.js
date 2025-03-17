const arrayOfHealthTips = [ 
    "Drink plenty of water throughout the day.",
    "Eat a balanced diet with lots of fruits and vegetables.",
    "Exercise regularly to keep your body fit and healthy.",
    "Get enough sleep to recharge your body and mind.",
    "Take time to relax and reduce stress every day.",
    "Stay active, even with small daily movements.",
    "Practice mindfulness to maintain mental well-being.",
    "Avoid smoking and excessive alcohol consumption.",
    "Make regular health check-ups a priority.",
    "Embrace a positive mindset for a healthy life.",
    "Spend time outdoors and enjoy fresh air.",
    "Remember, small changes lead to big results.",
    "Set realistic health goals and stick to them.",
    "Take breaks during the day to stay refreshed."
]

let countOfPills = 5; 
document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills);
function updatePillDisplay() {
    document.getElementById("count-of-tablets").innerText = "💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills);
}
document.getElementById('btn_health_wishes').addEventListener('click', function() {
    if (countOfPills > 0) {
        let index = Math.floor(Math.random() * arrayOfHealthTips.length);
        document.getElementById('health-wishes').innerText = arrayOfHealthTips[index];
        countOfPills--;
        updatePillDisplay();
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