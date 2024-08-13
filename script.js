
const skillsBox = document.getElementById('skills-box');
const cookingImage = document.getElementById('cooking-image');

 
skillsBox.addEventListener('mouseover', () => {
    cookingImage.classList.remove('hidden');
});


skillsBox.addEventListener('mouseout', () => {
    cookingImage.classList.add('hidden');
});


 
const goalsBox = document.getElementById('goals-box');
const hackingImage = document.getElementById('hacking-image');

 
goalsBox.addEventListener('mouseover', () => {
    hackingImage.classList.remove('hidden2');
});

 
goalsBox.addEventListener('mouseout', () => {
    hackingImage.classList.add('hidden2');
});

 
const ShowBox = document.getElementById('shows-box');
const FavoriteImage = document.getElementById('show-image');
 
ShowBox.addEventListener('mouseover', () => {
    FavoriteImage.classList.remove('hidden3');
});

 
ShowBox.addEventListener('mouseout', () => {
    FavoriteImage.classList.add('hidden3');
});

