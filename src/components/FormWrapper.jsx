const FormWrapper = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-2/3 bg-base-200">
      {children}
    </div>
  );
};

export default FormWrapper;
