const Card = ({ children }) => {
  return (
    <div className="rounded-3xl px-10 py-4 drop-shadow-xl bg-white">
      {children}
    </div>
  );
};

export default Card;
