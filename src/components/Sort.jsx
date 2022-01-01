import React from "react";
import { useDispatch } from "react-redux";
import  {setSortBy}  from "../redux/actions/filter";
const sortItems = [
  
  { name: "популярности", type: "rating" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
  
];

const Sort = React.memo(
  function Sort() {
    const dispatch = useDispatch();
    const [sort, setSort] = React.useState(0);
    const [showPopup, setShowPopup] = React.useState(false);
    
    const refSort = React.useRef();
    // * По сути хук useRef берет узел Дом элемента который имеет атрибут и функцию , и при клики на него заталкивает его в себя и сохраняет до следуйщего рендера.(В данном случае sort)
  
    const catchEvenet = (e) => {
      // * При клике в юзе ефект мы розводим event который вызывает целую ветку элементов на который был совершён клик как родителей так и длочерние , и по условию если этот путь включает в себя сохранненые нами выше элементы с помошью хука то не чего не меняеться , но при клике в место где не содержиться этих current value будет прятаться попап (false)
      if (!e.composedPath().includes(refSort.current)) {
        setShowPopup(false);
      }
    };
  
    React.useEffect(() => {
      setTimeout(() => {
        document.body.addEventListener("click", catchEvenet);
      }, 500);
    }, []);
  
    const toggleShowPopup = () => {
      setShowPopup(!showPopup);
    };
  
    const onSelect = (index, type) => {
      setSort(index);
      setShowPopup(false);
      dispatch(setSortBy(type));
    };
  
  
    
    return (
      <div ref={refSort} className="sort">
        <div className="sort__label">
          <svg
            className={showPopup ? "rotate" : ""}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={toggleShowPopup}>{sortItems[sort].name}</span>
        </div>
  
        {showPopup && (
          <div className="sort__popup">
            <ul>
              {sortItems &&
                sortItems.map((obj, index) => (
                  <li
                    className={sort === index ? "active" : " "}
                    onClick={() => onSelect(index, obj.type)}
                    key={`${index}`}
                  >
                    {obj.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
)

export default Sort;
