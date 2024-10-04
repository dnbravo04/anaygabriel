const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p className="text-center font-semibold text-3xl mx-2">{value}</p>
      <span className="flex text-center text-xl justify-center mx-2 mb-4">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
