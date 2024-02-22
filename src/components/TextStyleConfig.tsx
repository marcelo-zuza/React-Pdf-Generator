
const TextStyleConfig = () => {
  return (
    <div>
      <label  className="flex flex-col">
        Font Size:
        <input type="text" />
      </label>
      <label  className="flex flex-col">
        Font Color:
        <input type="color"  />
      </label>
      <label className="flex flex-row gap-2">
        Bold:
        <input type="checkbox" className="px-4"  />
      </label>
    </div>
  )
}

export default TextStyleConfig