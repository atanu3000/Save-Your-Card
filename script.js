const cards = document.getElementById('cards');

const fetchData = () => {
    fetch("data.json")
        .then((res) => res.json()) // Parse the response JSON
        .then((data) => {
            data.forEach((item) => {
                const card = document.createElement('div');
                card.id = 'card';
                card.className = 'mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6';

                card.innerHTML = `
                    <div class="flex flex-col items-center py-6 hover:bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 cursor-pointer h-full rounded-lg">
                        <img
                            class="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="${item.image}"
                            alt="${item.name} image"
                        />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            ${item.name}
                        </h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            ${item.email}
                        </span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <p class="px-5 text-center text-gray-600">${item.description}</p>
                        </div>
                    </div>
                `;

                cards.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

fetchData();

const fetchUserData = async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

const searchUsers = async () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const userData = await fetchUserData();
    cards.innerHTML = '';

    const filteredData = userData.filter(user => {
        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();
        return name.includes(searchInput) || email.includes(searchInput);
    });

    // Display search results
    filteredData.forEach(item => {
        const searchCard = document.createElement('div');
                searchCard.id = 'card';
                searchCard.className = 'mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-6';

                searchCard.innerHTML = `
                    <div class="flex flex-col items-center py-6 hover:bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 cursor-pointer">
                        <img
                            class="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="${item.image}"
                            alt="${item.name} image"
                        />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white" id="typedText">
                            ${item.name}
                        </h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            ${item.email}
                        </span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <p class="px-5 text-center text-[#b5b5b5]" ">${item.description}</p>
                        </div>
                    </div>
                `;
        cards.appendChild(searchCard);
    });
}


document.getElementById('searchInput').addEventListener('input', searchUsers);