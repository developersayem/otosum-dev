import type { NextComponentType, NextPageContext } from "next";
import { usePosGlobalState } from "../../../../context/PosGlobalStateContext";
import { Minus, Plus, X, XCircle } from "lucide-react";

interface Props {}

const ItemsListCom: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const {
    selectedItemsArry,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearSelectedItems,
  } = usePosGlobalState();

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table text-sm">
          {/* head */}
          <thead>
            <tr className="text-center text-[#6c696a] text-lg font-extrabold">
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {selectedItemsArry.map(({ id, name, price, quantity }) => (
              <tr
                key={id}
                className="text-center text-black text-base font-bold border-t-2 text-nowrap"
              >
                <td>{name}</td>
                <td>{price}</td>
                <td className="flex items-center justify-center gap-2">
                  <button className="bg-blue-500 text text-white rounded-md">
                    <Minus onClick={() => decreaseQuantity(id)} />
                  </button>
                  {quantity}
                  {/* <input
                    type="text"
                    value={quantity}
                    className="bg-transparent border-0 w-3"
                  /> */}
                  <button className="bg-blue-500 text-white rounded-md">
                    <Plus onClick={() => increaseQuantity(id)} />
                  </button>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    ${price * quantity}
                    <button className="bg-red-500 text-white rounded-full">
                      <X onClick={() => removeItem(id)} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsListCom;
