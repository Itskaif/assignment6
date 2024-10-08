let lastClickedButton = null;
const petsCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.error('Error', error));

}
const displayCategories = (categories) => {
    const getCategories = document.getElementById('Category-Container');
    getCategories.innerHTML = "";

    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.className = "flex items-center gap-3 border-2 w-[300px] py-2 justify-center rounded-xl";
        categoryButton.innerHTML = `
            <img src="${category.category_icon}" alt="${category.category}" />
            <p class = "font-bold">${category.category}</p>
        `;

        const originalBgColor = getComputedStyle(categoryButton).backgroundColor;
        const originalTextColor = getComputedStyle(categoryButton).color;

        categoryButton.addEventListener('click', () => {

            if(lastClickedButton && lastClickedButton !== categoryButton){
                lastClickedButton.style.backgroundColor = originalBgColor;
                lastClickedButton.style.color = originalTextColor;
            }
            categoryButton.style.backgroundColor = 'rgb(14, 122, 129)';
            categoryButton.style.color = "white";

            lastClickedButton = categoryButton;

            const petContainer = document.getElementById('allPets');
            petContainer.innerHTML = " ";
            if(category.category === "Bird"){
                showErrorPage();
            }
            else {
                if(category.category === "Cat"){
                    showCat();
                }
                else if(category.category === "Rabbit"){
                    showRabbit();
                }
                else if(category.category === "Dog"){
                    showDog();
                }
                else{
                    allPets();
                }
            }
        });
        getCategories.appendChild(categoryButton);
    });
}
const showErrorPage = () => {
    const petContainer = document.getElementById('allPets');
    petContainer.innerHTML = `
        <div class = "flex items-center flex-col h-full justify center">
        <img class = "mx-auto"  src = "././assets/error.webp">
        <h1 class="text-3xl font-bold">No Information Available</h1>
        <p>Unfortunately, no information is available at this time.</p>
    `
}
petsCategories();