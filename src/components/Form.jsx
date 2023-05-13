import { useRef } from "react"

const Form = (props) => {
  const inputRef = useRef()

  return (
    <div className="p-0" style={props.style}>
      <form onSubmit={(event) => props.onSubmit(event, inputRef)}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Masukkan nama antrian"
          className="bg-gray-50 border text-md border-gray-500 rounded-lg px-2 py-1 mr-1"
          autoFocus={true}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 mb-5 mr-1"
        >
          Simpan
        </button>
        <button
          type="button"
          className="bg-slate-400 hover:bg-slate-500 text-white rounded-lg px-3 py-1 mb-5"
          onClick={props.onCancel}
        >
          Batal
        </button>
      </form>
    </div>
  )
}

export default Form
