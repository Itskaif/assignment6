const showDog = () => {
    const loadBar = document.getElementById('loading');
    loadBar.classList.remove('hidden');
    fetch('https://openapi.programming-hero.com/api/peddy/category/dog')
    .then(res => res.json())
    .then(data => {
    setTimeout(() => {
        displayDog(data.data);
        loadBar.classList.add('hidden')
    }, 2000);
})
    .catch(error => console.error('Error', error))
}
const displayDog = (data) => {
    const showDog = document.getElementById('allPets');
    data.forEach(dog => {
        showDog.innerHTML += `
        <div class ="border-2 rounded-lg w-96">
            <div class="p-5">
                <img class="w-96 rounded-lg " src="${dog.image}">
                <div class = "space-y-3 mt-3">
                    <h3 class="font-bold text-3xl">${dog.pet_name}</h3>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-brands fa-ubuntu"></i> Breed: ${dog.breed}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-regular fa-calendar"></i> Birth: ${dog.date_of_birth}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        
                        <p><i class="fa-solid fa-venus"></i> Gender:    ${dog.gender}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-solid fa-dollar-sign"></i> Price: ${dog.price}$</p>
                    </div>
                    <hr>
                    <div class = " flex justify-between">
                        <button class = "btn"><i class="fa-regular fa-heart"></i></button>
                        <button class = "btn text-emerald-700">Adopt</button>
                        <button class = "btn text-emerald-700">Details</button>
                    </div>
                </div>
            </img>
        </div>
        `

    }

    )
}
showDog();