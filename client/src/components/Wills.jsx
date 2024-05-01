const Wills = ({ field, onChangeFunc, placeholder, styling }) => {

  field === ""
      ? styling = "rounded-sm text-black p-1 bg-zinc-100 focus:bg-white " + styling
      : styling = "rounded-sm text-black p-1 bg-zinc-500 focus:bg-white " + styling
  return (
          <div  className="flex flex-row items-center">
      <div  className={styling}>
        <div>
        <input className={styling} onChange={onChangeFunc} type="text" value={field} placeholder={placeholder} />
        </div>
      </div>
    </div>
  )
  }
  export default Wills;