const showRabbit = () => {
    const loadBar = document.getElementById('loading');
    loadBar.classList.remove('hidden');
    fetch('https://openapi.programming-hero.com/api/peddy/category/rabbit')
    .then(res => res.json())
    .then(data => { 
    setTimeout(() => {
        displayRabbit(data.data);
        loadBar.classList.add('hidden');
    }, 2000);
})    
    .catch(error => console.error('Error', error))
}
const displayRabbit = (rabbits) => {
    const showRabbit = document.getElementById('allPets');
    rabbits.forEach(rabbit => {
        showRabbit.innerHTML += `
        <div class ="border-2 rounded-lg w-96 ">
            <div class="p-5">
                <img class="w-96 rounded-lg " src="${rabbit.image}">
                <div class = "space-y-3 mt-3">
                    <h3 class="font-bold text-3xl">${rabbit.pet_name}</h3>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-brands fa-ubuntu"></i> Breed: ${rabbit.breed}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-regular fa-calendar"></i> Birth: ${rabbit.date_of_birth}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        
                        <p><i class="fa-solid fa-venus"></i> Gender:    ${rabbit.gender}</p>
                    </div>
                    <div class="flex items-center text-gray-500">
                        <p><i class="fa-solid fa-dollar-sign"></i> Price: ${rabbit.price}$</p>
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
        `;

    }

    )
}
showRabbit();