const btnLogo = document.querySelector('#logoBtn')
btnLogo.addEventListener('click', () => {
    window.location.href = 'index.html'
})

const eventsStore = [
    {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:"https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
    },

    {
    title:
    "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and CustomerExperience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:"https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
    },

    {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:"https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
    },

    {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:"https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=cropixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
    },

    {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:"https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=cropixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 74,
    },

    {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:"https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
    },
    ];

    const dropdownButtonCategory = document.querySelector('.dropdown-category-Button');
    const dropdownMenuCategory = document.querySelector('.dropdown-category-menu');
    const dropdownButtonDistance = document.querySelector('.dropdown-distance-Button');
    const dropdownMenuDistance = document.querySelector('.dropdown-distance-menu');
    const dropdownButtonType = document.querySelector('.dropdown-type-Button');
    const dropdownMenuType = document.querySelector('.dropdown-type-menu');
    const dropdownButtonDate = document.querySelector('.dropdown-date-Button');
    const dropdownMenuDate = document.querySelector('.dropdown-date-menu');
    const dropdownItemsDate = document.querySelectorAll('.dropdown-date-menu-item')
    const dropdownItemsType = document.querySelectorAll('.dropdown-type-menu-item')
    const dropdownItemsCategory = document.querySelectorAll('.dropdown-category-menu-item');
    const dropdownItemsDistance = document.querySelectorAll('.dropdown-distance-menu-item');
    const conteiner = document.querySelector('.events-left-picturs');
    
    let selectedCategory = 'All Category';
    let selectedDistance = 'All Distance';
    let selectedType = 'All Type';
    let selectedDate = 'All Date';
    
    dropdownButtonCategory.addEventListener('click', () => {
        dropdownMenuCategory.style.display = dropdownMenuCategory.style.display === 'block' ? 'none' : 'block';
    });
    
    dropdownButtonDistance.addEventListener('click', () => {
        dropdownMenuDistance.style.display = dropdownMenuDistance.style.display === 'block' ? 'none' : 'block';
    });

    dropdownButtonType.addEventListener('click', () => {
        dropdownMenuType.style.display = dropdownMenuType.style.display === 'block' ? 'none' : 'block';
    });

    dropdownButtonDate.addEventListener('click', () => {
        dropdownMenuDate.style.display = dropdownMenuDate.style.display === 'block' ? 'none' : 'block';
    });
    
    dropdownItemsCategory.forEach(item => {
        item.addEventListener('click', () => {
            selectedCategory = item.getAttribute('data-filter');
            filterItems();
            dropdownMenuCategory.style.display = 'none'; 
            dropdownButtonCategory.textContent = item.textContent;
        });
    });
    
    dropdownItemsDistance.forEach(item => {
        item.addEventListener('click', () => {
            selectedDistance = item.getAttribute('data-filter');
            filterItems();
            dropdownMenuDistance.style.display = 'none'; 
            dropdownButtonDistance.textContent = item.textContent;
        });
    });

    dropdownItemsType.forEach(item => {
        item.addEventListener('click', () => {
            selectedType = item.getAttribute('data-filter');
            filterItems();
            dropdownMenuType.style.display = 'none'; 
            dropdownButtonType.textContent = item.textContent;
        });
    });

    dropdownItemsDate.forEach(item => {
        item.addEventListener('click', () => {
            selectedDate = item.getAttribute('data-filter');
            filterItems();
            dropdownMenuDate.style.display = 'none'; 
            dropdownButtonDate.textContent = item.textContent;
        });
    });
    
    function formatDate(eventDate) {
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short',
        };
        return new Date(eventDate).toLocaleString('en-US', options);
    }

    function filterItems() {
        conteiner.innerHTML = '';
    
        const filteredItems = eventsStore.filter(item => {
            const categoryMatch = selectedCategory === 'All Category' || item.category === selectedCategory;
            const distanceMatch = selectedDistance === 'All Distance' || item.distance === parseInt(selectedDistance);
            const typeMatch = selectedType === 'All Type' || item.type === selectedType;
            const dateMatch = selectedDate === 'All Date' || formatDate(item.date) === selectedDate;
            return categoryMatch && distanceMatch && typeMatch && dateMatch;
        });
       
        displayFilterItems(filteredItems);
    }
    
    function displayFilterItems(arr) {
        arr.forEach(element => {
            const PictursConteiner = document.createElement('div');
            PictursConteiner.classList.add('events-left-picturs-element');
    
            const foto = document.createElement('img');
            foto.src = element.image;
    
            const date = document.createElement('h4');
            date.textContent = formatDate(element.date);
    
            const title = document.createElement('h6');
            title.textContent = element.title;
    
            const category = document.createElement('p');
            category.textContent = `${element.category} (${element.distance} km)`;
    
            PictursConteiner.append(foto, date, title, category);
            conteiner.appendChild(PictursConteiner);
        });
    }
    
    filterItems();
    