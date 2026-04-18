"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = {
  id: string;
  label: string;
  items: { name: string; price: string; description?: string }[];
};

const categories: Category[] = [
  {
    id: "shareplates",
    label: "Share Plates",
    items: [
      { name: "Blackened Chicken Nachos", price: "$16", description: "Pub chips, chargrilled chicken, white cheddar beer cheese, grilled corn, pickled onion, shredded lettuce, pepper relish, chipotle crema, green onion (sub shaved ribeye +2)" },
      { name: "Roasted Garlic Hummus", price: "$9", description: "Crispy chickpeas, herb pesto, feta, grilled sourdough" },
      { name: "Cauliflower", price: "$10", description: "Herb pesto, romesco, crushed cashews, balsamic glaze" },
      { name: "Golden Beet Chips", price: "$9", description: "Roasted garlic mayo, feta, smoked paprika" },
      { name: "Smoked Chicken Wings", price: "$12", description: "House jerk sauce, sweet n tangy bbq, buffalo, citrus honey, or cajun dry rub" },
      { name: "Crispy Brussels", price: "$8", description: "Hot garlic honey, tajin, ranch" },
      { name: "Popcorn Chicken", price: "$11", description: "Bbq, buffalo, citrus honey, or cajun dry rub, ranch or bleu cheese" },
      { name: "Disco Fries", price: "$16", description: "Braised beef, mozzarella, stout gravy, pickled onion, parm, roasted garlic mayo" },
      { name: "Pork Belly Skewers", price: "$13", description: "Crushed cashews, pickled red onion, house bbq, herb ranch" },
      { name: "Nashville Hot Chicken Skins", price: "$9", description: "Cayenne blend, house pickles, blue cheese crumbles, herb dressing" },
      { name: "Hot Honey Pepperoni Pizza", price: "$18", description: "Roman style dough, mozz, cup n' char peps, hot honey" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      { name: "Double Burger", price: "$16", description: "Caramelized onion, american cheese, shredded lettuce, burger sauce, potato roll" },
      { name: "Buttermilk Fried Chicken", price: "$16", description: "Springer mountain farms chicken, house pickles, shredded lettuce, hot honey, buttery buffalo, herb ranch, potato roll" },
      { name: "Das Gut Burger", price: "$17", description: "Swiss, saurkraut, whole grain mustard, garlic mayo, balsamic jam, bavarian pretzel roll" },
      { name: "Stout Braised Beef Melt", price: "$18", description: "Whipped goat cheese, mozz, caramelized onions, balsamic onion jam, herb pesto, stout gravy, toasted sourdough" },
      { name: "Loaded Quesadilla", price: "$17", description: "Blackened chicken, shrimp, or steak (+1), jack cheese, grilled corn, pickled onion, pepper relish, chipotle crema, green onion" },
      { name: "Falafel Wrap", price: "$15", description: "Shredded lettuce, feta, grilled corn, pickled red onion, pepper relish, charred jalapeno mayo" },
      { name: "Lamb Burger", price: "$18", description: "Whipped goat cheese, roasted red pepper, romesco, balsamic onion jam, pickled red onion, arugula, potato roll" },
      { name: "Turkey-Bacon-Cheddar-Ranch-Melt", price: "$17", description: "House smoked turkey, bacon, sharp cheddar, caramelized onion, pepper relish, herb ranch, toasted sourdough" },
      { name: "Pork Schnitzel", price: "$20", description: "Swiss, saurkraut, whole grain mustard, garlic mayo, balsamic jam, bavarian pretzel roll" },
      { name: "Pastrami Reuben", price: "$17", description: "1000 russian islands, swiss, sauerkraut, rye" },
      { name: "Cheesesteak", price: "$18", description: "Shaved ribeye, caramelized onion, american cheese, burger sauce, amoroso's roll" },
    ],
  },
  {
    id: "bowls",
    label: "Bowls + Plates",
    items: [
      { name: "French Onion Soup", price: "$8", description: "Sourdough croutons, mozz, crispy onions" },
      { name: "Iceberg Wedge", price: "$13", description: "Bacon, grilled corn, crispy red onion, balsamic glaze, blue cheese" },
      { name: "Golden Beet And Apple Salad", price: "$13", description: "Golden beets, honey-crisp apples, arugula, pickled onion, blue cheese crumble, cashews, apple cider vinaigrette" },
      { name: "Caesar Chop", price: "$11", description: "Crispy chickpeas, pickled onion, parm, caesar" },
      { name: "Jasmine Rice Bowl", price: "$15", description: "Grilled corn, cauliflower, pickled cucumber, crispy chickpeas, crushed cashews, feta, arugula, pickled onion, romesco, herb ranch, hot honey" },
      { name: "Ribeye (16oz)", price: "$43", description: "Garlic-truffle-parm smashed fingerlings, grilled asparagus, roasted garlic mayo, chimichurri" },
      { name: "Pan Seared Salmon", price: "$27", description: "Cajun cream, jasmine rice, cauliflower, roasted red peppers, arugula, grilled corn, red and green onion, lemon" },
      { name: "Cherry Glazed Pork Chop (12oz)", price: "$31", description: "Garlic-truffle-parm smashed fingerlings, whipped goat cheese, spiced cherry reduction, crispy brussels, crushed cashews" },
      { name: "Braised Beef Or Pork Schnitzel", price: "$23", description: "Mashed potatoes, brown gravy, bacon-collards, lemon-thyme gremolata" },
    ],
  },
  {
    id: "cocktails",
    label: "House Cocktails",
    items: [
      { name: "Limoncello Spritz", price: "$10" },
      { name: "Cucumber Gin & Tonic", price: "$9" },
      { name: "Spicy Jalapeño Marg", price: "$11" },
      { name: "Espresso Martini", price: "$14" },
      { name: "Pecan Old Fashioned", price: "$14" },
      { name: "Painkiller", price: "$12" },
      { name: "Peach Mule", price: "$12" },
    ],
  },
  {
    id: "beer",
    label: "Draft Beer",
    items: [
      { name: "Coors Banquet", price: "$6" },
      { name: "Guinness", price: "$8" },
      { name: "Sierra Nevada Pale Ale", price: "$7" },
      { name: "Amor Artis Cruisin' IPA", price: "$8" },
      { name: "Slow Play Hazy IPA", price: "$8" },
      { name: "Modelo Especial", price: "$7" },
      { name: "Gilde Amber Lager", price: "$7" },
      { name: "Snafu Watermelon Sour", price: "$8" },
    ],
  },
  {
    id: "cans",
    label: "Bottles & Cans",
    items: [
      { name: "Miller Lite", price: "$4" },
      { name: "Coors Lite", price: "$4" },
      { name: "Mich Ultra", price: "$5" },
      { name: "Yuengling", price: "$4" },
      { name: "PBR", price: "$3" },
      { name: "Juicy Jay IPA (16oz)", price: "$7" },
      { name: "Topo Chico Seltzer", price: "$6" },
      { name: "Blake's Cider", price: "$6" },
      { name: "Athletic Golden Ale (N/A)", price: "$5" },
    ],
  },
  {
    id: "wine",
    label: "Wine",
    items: [
      { name: "Back House Pinot Noir", price: "$6" },
      { name: "Back House Cabernet", price: "$6" },
      { name: "Back House Chardonnay", price: "$6" },
      { name: "Lindeman's Sauvignon Blanc", price: "$6" },
      { name: "Benvolio Prosecco", price: "$9" },
      { name: "Elouan Rosé", price: "$12" },
      { name: "Dalia Pinot Grigio", price: "$9" },
      { name: "Mohua Sauvignon Blanc", price: "$10" },
      { name: "Kendall Jackson Chardonnay", price: "$11" },
      { name: "Sokol Blosser Evo Pinot Noir", price: "$13" },
      { name: "Murphy Goode Cabernet", price: "$10" },
      { name: "Quilt Cabernet (Bottle)", price: "$70" },
      { name: "Belle Glos (Bottle)", price: "$75" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Fries", price: "" },
      { name: "Cajun Fries", price: "+$0.50" },
      { name: "Pub Chips", price: "" },
      { name: "Wholegrain Mustard Potato Salad", price: "" },
      { name: "Jalapeño Slaw", price: "" },
      { name: "Crispy Brussels", price: "+$2" },
      { name: "Side Caesar", price: "+$2" },
      { name: "Veggie Couscous", price: "+$2" },
      { name: "Smashed Fingerlings", price: "+$2" },
      { name: "Bacon Collards", price: "" },
    ],
  },
];

export default function MenuPage() {
  const [active, setActive] = useState("shareplates");
  const currentCat = categories.find((c) => c.id === active)!

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.find((c) => c.id === hash)) {
      setActive(hash);
    }
  }, []);;

  return (
    <div className="bg-[#0F0F0D] min-h-screen pt-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-script text-[#C8963E] text-4xl block mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            What We&apos;re Serving
          </span>
          <h1
            className="font-display font-black text-[#F5E9D5] leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
            }}
          >
            THE MENU
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 flex flex-col md:flex-row gap-10">
        {/* Sticky sidebar nav */}
        <aside className="md:w-56 flex-none">
          <div className="md:sticky md:top-28 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-1 pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex-none text-left px-4 py-2.5 text-sm font-body transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                  active === cat.id
                    ? "bg-[#C8963E] text-[#0F0F0D] font-semibold"
                    : "text-[#F5E9D5]/60 hover:text-[#C8963E]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Menu items */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h2
                className="font-display font-bold text-[#F5E9D5] text-3xl md:text-4xl mb-8 pb-4 border-b border-[#C8963E]/20"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {currentCat.label}
              </h2>
              <div className="flex flex-col gap-0">
                {currentCat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="menu-item-hover border border-transparent flex flex-col sm:flex-row sm:items-start justify-between gap-2 py-5 px-4 border-b border-[#F5E9D5]/5"
                  >
                    <div className="flex-1">
                      <p
                        className="font-display font-semibold text-[#F5E9D5] text-lg"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </p>
                      {item.description && (
                        <p className="font-body text-[#F5E9D5]/50 text-sm mt-1 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="font-body font-semibold text-[#C8963E] text-lg flex-none">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
