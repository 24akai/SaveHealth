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


const arrayOfVitamins = [
    {
        id: 1,
        title: "D",
        photo: "d.png", 
        description: "Vitamin D is essential for calcium absorption and bone health.",
        rating: 3,
        type: "Fat-soluble"
    },
    {
        id: 2,
        title: "B12",
        photo: "b12.png",
        description: "Vitamin B12 is crucial for nerve function and the production of red blood cells.",
        rating: 5,
        type: "Water-soluble"
    },
    {
        id: 3,
        title: "Vitamin B+",
        photo: "b+.png", 
        description: "Vitamin B complex improves energy levels, nervous system function, and metabolism.",
        rating: 2,
        type: "Water-soluble"
    },
    {
        id: 4,
        title: "Vitamin C",
        photo: "c.png",
        description: "Vitamin C strengthens the immune system, helps in wound healing, and acts as an antioxidant.",
        rating: 4,
        type: "Water-soluble"
    },
    {
        id: 5,
        title: "Vitamin E",
        photo: "e.png",
        description: "Vitamin E is a powerful antioxidant that helps protect cells from damage and supports skin health.",
        rating: 1,
        type: "Fat-soluble"
    }
];
  
  arrayOfVitamins.forEach((item, index) => {
  
    let divVitamin = document.createElement("div");
    divVitamin.classList.add("vitamin");
  
    document.getElementById("p-vitamin").appendChild(divVitamin);
  
    divVitamin.innerHTML = `
         <span>${item.id}</span>
         <h3>${item.title}</h3>
         <hr>
            <img src="img/vitamins/${item.photo}" alt="">
            <p>${item.description}</p>
            <span>${"💊".repeat(item.rating) + "❌".repeat(5 - item.rating)}</span>
            <p>${item.type}</p>
              `;
  });