import React from "react";

const categoriesArr = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories = React.memo(function Categories({activeCategory, selectActiveTitle}) {



  // * По факту мы просто заменили state на redux activeCategory => вытягиваем индекс с редакса который был совершон при клики изначальное initial = null
  // const [activeTitle, setActiveTitle] = React.useState(null);


  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : " "}
          onClick={() => selectActiveTitle(null)}
          
        >
          Все
        </li>
        {categoriesArr.map((title, index) => (
          <li
            className={activeCategory === index ? "active" : " "}
            onClick={() => selectActiveTitle(index)}
            key={`${title}_${index}`}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default Categories;
