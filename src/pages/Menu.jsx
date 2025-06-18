export default function Menu() {
  const menuCategories = [
    {
      name: "Coffee & Espresso",
      items: [
        {
          name: "Americano",
          price: "$3.50",
          description: "Rich espresso with hot water",
        },
        {
          name: "Cappuccino",
          price: "$4.25",
          description: "Espresso with steamed milk and foam",
        },
        {
          name: "Latte",
          price: "$4.75",
          description: "Espresso with steamed milk",
        },
        {
          name: "Mocha",
          price: "$5.25",
          description: "Espresso with chocolate and steamed milk",
        },
      ],
    },
    {
      name: "Specials",
      items: [
        {
          name: "French Press",
          price: "$2.95",
          description: "Full-bodied coffee steeped in a press for rich flavor",
        },
        {
          name: "Turkish Coffee",
          price: "$4.50",
          description: "Finely ground coffee simmered with sugar and cardamom",
        },
        {
          name: "Drip Coffee",
          price: "$3.75",
          description: "Smooth, classic brewed coffee made fresh daily",
        },
        {
          name: "Tea",
          price: "$2.75",
          description: "A selection of herbal and black teas brewed to order",
        },
      ],
    },
    {
      name: "Breakfast",
      items: [
        {
          name: "Avocado Toast",
          price: "$8.50",
          description: "Fresh avocado on sourdough with tomatoes",
        },
        {
          name: "Eggs Benedict",
          price: "$12.95",
          description: "Poached eggs with hollandaise on English muffin",
        },
        {
          name: "Pancakes",
          price: "$9.75",
          description: "Fluffy buttermilk pancakes with maple syrup",
        },
        {
          name: "Granola Bowl",
          price: "$7.25",
          description: "House-made granola with yogurt and berries",
        },
      ],
    },
    {
      name: "Lunch",
      items: [
        {
          name: "Club Sandwich",
          price: "$11.50",
          description: "Turkey, bacon, lettuce, tomato on toasted bread",
        },
        {
          name: "Caesar Salad",
          price: "$10.25",
          description: "Crisp romaine with parmesan and croutons",
        },
        {
          name: "Grilled Chicken Wrap",
          price: "$12.75",
          description: "Grilled chicken with vegetables in tortilla",
        },
        {
          name: "Soup of the Day",
          price: "$6.95",
          description: "Ask your server for today's selection",
        },
      ],
    },
    {
      name: "Pastries & Desserts",
      items: [
        {
          name: "Croissant",
          price: "$3.25",
          description: "Buttery, flaky French pastry",
        },
        {
          name: "Blueberry Muffin",
          price: "$3.95",
          description: "Fresh baked with local blueberries",
        },
        {
          name: "Chocolate Cake",
          price: "$5.50",
          description: "Rich chocolate layer cake",
        },
        {
          name: "Cheesecake",
          price: "$6.25",
          description: "Creamy New York style cheesecake",
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1717484909079-d10de22ac3cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee shop menu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-oswald uppercase mb-4">
              Our Menu
            </h2>
            <div className="w-20 h-0.5 bg-grenadine mb-4 mx-auto" />
            <p className="text-sm max-w-md mx-auto">
              Fresh, locally sourced ingredients crafted into delicious dishes
            </p>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="bg-white p-8 md:p-12">
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-oswald uppercase mb-6 text-grenadine">
                  {category.name}
                </h3>
                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start group"
                    >
                      <div className="flex-1">
                        <div className="flex items-baseline mb-1">
                          <h4 className="font-oswald text-lg text-gray-900 mr-2">
                            {item.name}
                          </h4>
                          <div className="flex-1 border-b border-dotted border-gray-300 mx-2 transition-colors" />
                          <span className="font-oswald text-lg text-grenadine/80">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-shadow/80 max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
