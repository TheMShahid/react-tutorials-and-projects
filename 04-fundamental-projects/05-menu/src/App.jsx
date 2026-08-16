import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// long way of the categories
// const categories = menu.map((menu) => menu.category);
// const uniqueCategories = new Set(categories);
// const allUniqueCategories = ["all", ...uniqueCategories];
// console.log(allUniqueCategories);

// short way of the categories
const uniqueCategoriesWithAll = [
  "all",
  ...new Set(menu.map((item) => item.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(uniqueCategoriesWithAll);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
