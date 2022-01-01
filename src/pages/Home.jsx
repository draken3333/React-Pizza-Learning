import React from "react";
import { Sort, Categories } from "../components/index";
import { PizzaBlock, PlaceHolder } from "../components/PizzaBlock/index";
import { setCategoryBy } from "../redux/actions/filter";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzasToCart } from "../redux/actions/cart";



import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { items, isLoading, category, sortBy } = useSelector((state) => {
    return {
      items: state.pizzas.items,
      isLoading: state.pizzas.isLoaded,
      category: state.filters.category,
      sortBy: state.filters.sortBy,
    };
  });

  const cartItems = useSelector(({ cart }) => cart.items);


  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));

    // ^ Иза того что пиццы находяться в home то каждый раз как мы вызываем компонент то рендеряться опять пиццы , что бы этого не было мы указываем если масссив  меньше нуля то ререндерить пиццы прерисововать.
  }, [category, sortBy]);

  const selectActiveTitle = React.useCallback((index) => {
    dispatch(setCategoryBy(index));
  }, []);

  const hendlePizzaCart = (obj) => {
    dispatch(addPizzasToCart(obj));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            selectActiveTitle={selectActiveTitle}
          />

          <Sort selectSortType={sortBy} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...Array(8)].map((item, index) => (
                <PlaceHolder key={`${index}`} />
              ))
            : items.map((obj, index) => (
                <PizzaBlock
                  key={`${obj.name}_${index}`}
                  {...obj}
                  addedCartCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                  onAddToCart={hendlePizzaCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
