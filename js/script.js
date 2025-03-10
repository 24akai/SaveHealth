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

document.getElementById('btn_health_wishes').addEventListener('click', function(){
    let index = Math.floor(Math.random() * arrayOfHealthTips.length)
    document.getElementById('health-wishes').innerText = arrayOfHealthTips[index]
})