import { useSelector } from "react-redux";

export const CartIcon = ({ height, component }) => {
  const { cartData } = useSelector((state) => state.cart);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-white fw-lighter"
        height={height || "40px"}
      >
        {/* New Cart Icon Path */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18l-1.5 9H4.5L3 3zm3 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM17 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
        />
        <text x="12" y="12" textAnchor="middle" fontSize="6" fill="black">
          {component === "header" ? cartData?.products?.length : null}
        </text>
      </svg>
    </>
  );
};
