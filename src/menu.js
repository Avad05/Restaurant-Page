export default function generateMenu() {
    const content = document.querySelector("#content");
    content.textContent = '';

    // Helper to create a menu section
    function createMenuSection(title, dishes) {
        const section = document.createElement("div");
        section.classList.add(title.toLowerCase());

        section.style.flex = '1';
        section.style.padding = '1rem';
        section.style.margin = '1rem';
        section.style.backgroundColor = '#fdf6ee';
        section.style.border = '1px solid #ccc';
        section.style.borderRadius = '8px';
        section.style.textAlign = 'left';

        const heading = document.createElement("h2");
        heading.textContent = title;
        heading.style.textAlign = 'center';
        section.appendChild(heading);

        const list = document.createElement("ul");
        list.style.listStyle = 'none';
        list.style.padding = '0';

        dishes.forEach(({ name, price }) => {
            const item = document.createElement("li");
            item.style.display = 'flex';
            item.style.justifyContent = 'space-between';
            item.style.borderBottom = '1px dotted #ccc';
            item.style.margin = '0.5rem 0';
            item.style.paddingBottom = '0.25rem';

            const dishName = document.createElement("span");
            dishName.textContent = name;

            const dishPrice = document.createElement("span");
            dishPrice.textContent = `$${price.toFixed(2)}`;

            item.appendChild(dishName);
            item.appendChild(dishPrice);
            list.appendChild(item);
        });

        section.appendChild(list);
        return section;
    }

    // Menu data
    const breakfastItems = [
        { name: "Pancakes", price: 5.99 },
        { name: "Omelette", price: 6.49 },
        { name: "Fruit Salad", price: 4.25 },
        { name: "Idli", price: 2.99},
        { name: "dosa", price: 4.99},
        { name: "wada pav", price: 5.99},
        { name: "Samosa", price: 3.49},
        { name: "Pizza", price: 9.87},
    ];

    const lunchItems = [
        { name: "Grilled Chicken", price: 9.99 },
        { name: "Caesar Salad", price: 7.50 },
        { name: "Tomato Soup", price: 4.75 },
        { name: "Dal Rice", price: 5.89},
        { name: "Chicken Biryani", price: 7.80},
        { name: "Naan(2 pc)", price: 2.9},
        { name: "Mutton gravy", price:8.54},
        { name: "Salmon fry", price:19.00},
    ];

    const dinnerItems = [
        { name: "Steak", price: 14.99 },
        { name: "Khichdi", price: 42.00},
        { name: "Mushroom", price: 13.78},
        { name: "Paneer", price: 30.89},
        { name: "Moong Dal", price: 30.00},
        { name: "Mashed Potatoes", price: 5.99 },
        { name: "Roasted Veggies", price: 6.25 },
    ];

    // Append sections directly to #content
    const sections = [
        createMenuSection("Breakfast", breakfastItems),
        createMenuSection("Lunch", lunchItems),
        createMenuSection("Dinner", dinnerItems)
    ];

    // Make content a flex container if you want side-by-side
    content.style.display = 'flex';
    content.style.justifyContent = 'space-around';
    content.style.flexWrap = 'wrap';
    content.style.gap = '1rem';

    sections.forEach(section => content.appendChild(section));
}
