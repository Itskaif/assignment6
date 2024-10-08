const allPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => showAllPets(data.pets))
        .catch(error => console.error('Error', error))
}

const showAllPets = (pets) => {
    const petContainer = document.getElementById('allPets')
    petContainer.innerHTML = '';


    pets.forEach(pet => {
        petContainer.innerHTML += `
        <div class ="border-2 rounded-lg w-96 hidden">
            <div class="p-5">
                <img class="w-96 rounded-lg " src="${pet.image}">
                <div class = "space-y-3 mt-3">
                    <h3 class="font-bold text-3xl">${pet.pet_name}</h3>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-brands fa-ubuntu"></i> Breed: ${pet.breed}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        
                        <p><i class="fa-solid fa-venus"></i> Gender:    ${pet.gender}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}$</p>
                    </div>
                    <hr>
                    <div class = " flex justify-between">
                        <button onclick = "toggleFavorite('${pet.image}', '${pet.pet_name}')" class = "btn"><i class="fa-regular fa-heart"></i></button>
                        <button class = "btn text-emerald-700 adopt">Adopt</button>
                        <button class = "btn text-emerald-700">Details</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });


    const enableSorting = (pets) => {
        const sortButton = document.getElementById('btn1');

        sortButton.addEventListener('click', () => {
            pets.sort((a, b) => b.price - a.price);

            showAllPets(pets);
        });
    }


    document.querySelectorAll('.adopt').forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById('adoptModal');
            const countdownElement = document.getElementById('countdown');
            modal.classList.remove('hidden');

            let countdown = 3;

            const interval = setInterval(() => {
                countdownElement.textContent = countdown;

                countdown--;

                if (countdown < 0) {
                    clearInterval(interval);
                    modal.classList.add('hidden');
                }
            }, 1000);
        });
    });
}
allPets();