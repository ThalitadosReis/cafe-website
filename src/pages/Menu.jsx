import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";

const MENU_CATEGORIES = [
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

function MenuItem({ name, price, description }) {
  return (
    <div>
      <div className="flex items-baseline">
        <h4 className="font-display text-lg text-shadow">{name}</h4>
        <div className="flex-1 border-b border-dotted border-shadow/25 mx-4" />
        <span className="font-mono text-sm text-grenadine/75">{price}</span>
      </div>
      <p className="text-sm font-body text-shadow/55 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Menu() {
  return (
    <>
      <PageHero
        src="https://images.unsplash.com/photo-1717484909079-d10de22ac3cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Coffee shop menu spread"
        title="Our Menu"
        subtitle="Fresh, locally sourced ingredients crafted into delicious dishes"
      />

      <section className="bg-white px-8 md:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {MENU_CATEGORIES.map((category, index) => (
            <Reveal key={category.name} delay={index * 60}>
              <div className="space-y-5">
                <h3 className="text-xl font-display text-grenadine">
                  {category.name}
                </h3>
                <div className="grid gap-5">
                  {category.items.map((item) => (
                    <MenuItem key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
