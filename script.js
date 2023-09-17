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
                    <div class="flex flex-col items-center py-6">
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
                            <p class="px-5 text-center text-black">${item.description}</p>
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
