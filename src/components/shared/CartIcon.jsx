import { useSelector } from "react-redux";

export const CartIcon = ({ height }) => {
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
        {/* Updated Cart Icon Path */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.5l1.3 3.25m0 0L7.5 15.75a1.5 1.5 0 0 0 1.4 1.03h7.2a1.5 1.5 0 0 0 1.4-1.03l2.35-8.5m-14.35 0h12.5"
        />
        <circle cx="9" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="19" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};
