import React from "react";
import { usePosGlobalState } from "../../../../context/PosGlobalStateContext";
import { Minus, Plus, X } from "lucide-react";

interface Props {}

const ItemsListCom: React.FC<Props> = () => {
  const {
    selectedItemsArry,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearSelectedItems,
  } = usePosGlobalState();

  const handleQuantityChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      increaseQuantity(id, newQuantity);
    }
  };

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
                  <button
                    className="bg-blue-500 text text-white rounded-md"
                    onClick={() => decreaseQuantity(id)}
                  >
                    <Minus />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(id, e)}
                    className="w-12 border rounded-md text-center bg-transparent text-black"
                  />
                  <button
                    className="bg-blue-500 text-white rounded-md"
                    onClick={() => increaseQuantity(id)}
                  >
                    <Plus />
                  </button>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    ${price * quantity}
                    <button
                      className="bg-red-500 text-white rounded-full"
                      onClick={() => removeItem(id)}
                    >
                      <X />
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
