import { ReactComponent as SoundIcon } from "./../assets/icon/sound.svg"
import { ReactComponent as PrintIcon } from "./../assets/icon/print.svg"
import { React } from "react"
import { Link } from "react-router-dom"

// class Counter extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="bg-blue-100 rounded-md px-5 py-3">
//           <div className="flex flex-col">
//             <div className="flex justify-between">
//               <div className="order-first underline">
//                 <Link to={`/queue/${this.props.id}`}>{this.props.name}</Link>
//               </div>
//               <div className="row">
//                 <SoundIcon className="mx-auto border hover:border-sky-500 w-6" />
//                 <PrintIcon
//                   className="mx-auto border hover:border-sky-500 w-6"
//                   onClick={this.props.printNextQueue}
//                 />
//               </div>
//             </div>
//             <div className="text-center pt-3 pb-10">
//               <span className="block">Antrian</span>
//               <span className="text-3xl">{this.props.currentQueue}</span>
//             </div>
//             <div>
//               <div className="flex justify-between">
//                 <a href="#/" onClick={this.props.goToPreviousQueue}>
//                   {this.props.previousQueue && (
//                     <div className="order-first bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
//                       Kembali ke-{this.props.previousQueue}
//                     </div>
//                   )}
//                 </a>
//                 <a href="#/" onClick={this.props.goToNextQueue}>
//                   {this.props.nextQueue && (
//                     <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
//                       Lanjut ke-{this.props.nextQueue}
//                     </div>
//                   )}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

const Counter = (props) => {
  return (
    <div className="bg-blue-100 rounded-md px-5 py-3">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="order-first underline">
            <Link to={`/queue/${props.id}`}>{props.name}</Link>
          </div>
          <div className="row">
            <SoundIcon className="mx-auto border hover:border-sky-500 w-6" />
            <PrintIcon
              className="mx-auto border hover:border-sky-500 w-6"
              onClick={props.printNextQueue}
            />
          </div>
        </div>
        <div className="text-center pt-3 pb-10">
          <span className="block">Antrian</span>
          <span className="text-3xl">{props.currentQueue}</span>
        </div>
        <div>
          <div className="flex justify-between">
            <a href="#/" onClick={props.goToPreviousQueue}>
              {props.previousQueue && (
                <div className="order-first bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
                  Kembali ke-{props.previousQueue}
                </div>
              )}
            </a>
            <a href="#/" onClick={props.goToNextQueue}>
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
  )
}

export default Counter
