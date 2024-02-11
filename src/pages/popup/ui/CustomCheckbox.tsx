type TCustomCheckboxProps = {
  checked: boolean;
  handleChecked?: () => void;
};
const CustomCheckbox = ({ checked, handleChecked }: TCustomCheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      {/* Hidden checkbox input */}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChecked} // Call handleChecked when the input changes
        className="hidden"
      />
      {/* Custom SVG */}
      <button className="w-6 h-6 flex items-center justify-center border rounded-md" onClick={handleChecked}>
        {checked ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="8" fill="#136DF5" />
            <path
              d="M7.19995 12.5053L10.9818 15.2L16.8 8.80005"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.8" y="0.8" width="22.4" height="22.4" rx="7.2" fill="white" />
            <rect x="0.8" y="0.8" width="22.4" height="22.4" rx="7.2" stroke="#ECEEFC" strokeWidth="1.6" />
          </svg>
        )}
      </button>
    </label>
  );
};

export default CustomCheckbox;
