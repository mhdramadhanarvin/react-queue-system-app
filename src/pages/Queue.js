import { Link, useParams } from "react-router-dom"
import { ReactComponent as BackIcon } from "./../assets/icon/back.svg"
import Counter from "../components/Counter"

const Queue = () => {
  const params = useParams()
  console.log(params.id)

  return (
    <>
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 mb-5">
          <BackIcon className=" text-white w-6" />
        </button>
      </Link>
      <Counter key="1" id="1" name="Antrian" currentQueue="1" nextQueue="2" />
    </>
  )
}

export default Queue
