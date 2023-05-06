import { ReactComponent as SoundIcon } from "./sound-icon.svg";

export default function Counter(props) {
  return (
    <div className="bg-blue-100 rounded-md px-5 py-3">
      <div className="flex flex-col">
        {/* <div>{props.name}</div> */}
        <div className="flex justify-between">
          <div className="order-first ">{props.name}</div>{" "}
          <div className="">
            <SoundIcon className="mx-auto border hover:border-sky-500" />
          </div>
        </div>
        <div className="text-center py-8">
          <span className="block">Antrian</span>
          <span className="text-3xl">
            {props.currentQueue}
            {/* <a href="/">
              <SoundIcon className="mx-auto border hover:border-sky-500" />
            </a> */}
          </span>
        </div>
        <div>
          <div className="flex justify-between">
            <a href="#/">
              {props.previousQueue && (
                <div className="order-first bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
                  Kembali ke-{props.previousQueue}
                </div>
              )}
            </a>
            <a href="#/">
              {props.nextQueue && (
                <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
                  Lanjut ke-{props.nextQueue}
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
