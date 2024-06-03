const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p className="text-center font-bold text-3xl mb-2 mx-2">{value}</p>
      <span className="flex text-center text-xl justify-center mt-2 mx-2">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
