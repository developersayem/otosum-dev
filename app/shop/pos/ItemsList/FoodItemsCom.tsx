import type { NextComponentType, NextPageContext } from "next";
import FoodCardCom from "./FoodCardCom";

interface Props {}

const FoodItemsCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div className=" bg-white rounded-lg text-black grid grid-cols-3 gap-1 gap-y-3">
      <FoodCardCom
        id={1}
        name="Granola Bars"
        price={30}
        quantity={0}
        img="https://i.ibb.co/b2kMMz0/granold-bars.png"
      />
      <FoodCardCom
        id={2}
        name="Chicken Wings"
        price={30}
        quantity={0}
        img="https://i.ibb.co/sF9tDWB/Pasted-image-1.png"
      />
      <FoodCardCom
        id={3}
        name="Spring Rolls"
        price={30}
        quantity={0}
        img="https://i.ibb.co/42VB6GK/spring-rolles.png"
      />
      <FoodCardCom
        id={4}
        name="Sushi Rolls"
        price={30}
        quantity={0}
        img="https://i.ibb.co/9NXC3m3/sushi-rolls.png"
      />
      <FoodCardCom
        id={5}
        name="Deviled Eggs"
        price={30}
        quantity={0}
        img="https://i.ibb.co/VwYDtBv/deviled-eggs.png"
      />
      <FoodCardCom
        id={6}
        name="Fruit Slices"
        price={30}
        quantity={0}
        img="https://i.ibb.co/k2hkfcj/fruit-slices.png"
      />
      <FoodCardCom
        id={1}
        name="Granola Bars"
        price={30}
        quantity={0}
        img="https://i.ibb.co/b2kMMz0/granold-bars.png"
      />
      <FoodCardCom
        id={2}
        name="Chicken Wings"
        price={30}
        quantity={0}
        img="https://i.ibb.co/sF9tDWB/Pasted-image-1.png"
      />
      <FoodCardCom
        id={3}
        name="Spring Rolls"
        price={30}
        quantity={0}
        img="https://i.ibb.co/42VB6GK/spring-rolles.png"
      />
    </div>
  );
};

export default FoodItemsCom;
