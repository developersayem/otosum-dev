import type { NextComponentType, NextPageContext } from "next";
import FoodCardCom from "./FoodCardCom";

interface Props {}

const FoodItemsCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const generateRandomDiscount = () => {
    return Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  };

  return (
    <div className=" bg-white rounded-lg text-black grid grid-cols-3 gap-1 gap-y-3">
      <FoodCardCom
        id={1}
        name="Granola Bars"
        price={30}
        quantity={0}
        img="https://i.ibb.co/b2kMMz0/granold-bars.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={2}
        name="Chicken Wings"
        price={30}
        quantity={0}
        img="https://i.ibb.co/sF9tDWB/Pasted-image-1.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={3}
        name="Spring Rolls"
        price={30}
        quantity={0}
        img="https://i.ibb.co/42VB6GK/spring-rolles.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={4}
        name="Sushi Rolls"
        price={30}
        quantity={0}
        img="https://i.ibb.co/9NXC3m3/sushi-rolls.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={5}
        name="Deviled Eggs"
        price={30}
        quantity={0}
        img="https://i.ibb.co/VwYDtBv/deviled-eggs.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={6}
        name="Fruit Slices"
        price={30}
        quantity={0}
        img="https://i.ibb.co/k2hkfcj/fruit-slices.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={1}
        name="Granola Bars"
        price={30}
        quantity={0}
        img="https://i.ibb.co/b2kMMz0/granold-bars.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={2}
        name="Chicken Wings"
        price={30}
        quantity={0}
        img="https://i.ibb.co/sF9tDWB/Pasted-image-1.png"
        discount={generateRandomDiscount()}
      />
      <FoodCardCom
        id={3}
        name="Spring Rolls"
        price={30}
        quantity={0}
        img="https://i.ibb.co/42VB6GK/spring-rolles.png"
        discount={generateRandomDiscount()}
      />
    </div>
  );
};

export default FoodItemsCom;
