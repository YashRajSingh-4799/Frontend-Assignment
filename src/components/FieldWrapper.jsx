const FieldWrapper = ({children}) => {
    return (
      <div
        className="flex flex-col gap-y-3 formbg border-indigo-700 border-2 items-center justify-center 
        bg-slate-50 w-full p-2 rounded  mb-5"
      >
        {children}
      </div>
    );
}
 
export default FieldWrapper;