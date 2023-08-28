const LabelRegister = ({ label, type, children }) => {
  return (
    <label className="flex my-2 flex-col gap-1 text-xs w-full" htmlFor={label}>
      <span className="text-xs">{label}</span>
      {type === "textarea" ? (
      <textarea
      className="p-3 w-full rounded-md outline-none border border-slate-900"
      name={label}
      required
      id={label}
      placeholder={children}
      cols="30"
      rows="2"
      ></textarea>
      ) : (
      <input
      className="p-3 w-full rounded-md outline-none border border-slate-900"
      type={type}
      required
      placeholder={children}
      name={label}
      id={label}
      />
      )}
    </label>
  );
};

export default LabelRegister;