import TextStyleConfig from "./TextStyleConfig"
import ImageUpload from "./ImageUpload"

const GeneratePdf = () => {
  return (
    <div className="place-items-center grid col-span-1 py- md:py-8 md:mx-52 md:my-8 rounded-lg">
      <div className="py-4">
        <h1 className="text-4xl md:text-5xl">Gerador de PDF</h1>
        <h1 className="text-xl md:text-2xl">by Marcelo Zuza</h1>
      </div>
      <div className="border-2 border-black rounded-lg mx-8">
        <label className="flex flex-col">
          Title:
          <input type="text" className="border-2" />
        </label>
        <label className="flex flex-col">
          Description:
          <input type="" className="" />
        </label>
        <TextStyleConfig />
        <ImageUpload />
      </div>
    </div>
  )
}

export default GeneratePdf