import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemCards }) => {
//   console.log(itemCards);

  return (
    <div>
      {itemCards.map((item) => {
        {/* console.log(item); */}
        return (
          <div className="border-b-2 py-4 border-gray-200 flex justify-between ">
            <div className="w-9/12">
              <h4 className="font-semibold text-md">
                {item?.card?.info?.name}
              </h4>
              <p>₹ 
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4 aspect-[1.2/1] relative">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full h-full rounded-lg "
                alt=""
              />
              <button className="absolute left-2/4 bottom-2 -translate-x-1/2 px-4 py-1 rounded-md bg-green-500 text-white shadow-md">
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
