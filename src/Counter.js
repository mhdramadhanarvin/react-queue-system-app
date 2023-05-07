import { ReactComponent as SoundIcon } from "./sound-icon.svg";
import { ReactComponent as PrintIcon } from "./print-icon.svg";
import { Component } from "react";
// import { getDatabase, ref, set, onValue } from "firebase/database";

class Counter extends Component { 

  render() {
    return (
      <div className="bg-blue-100 rounded-md px-5 py-3">
        <div className="flex flex-col"> 
          <div className="flex justify-between">
            <div className="order-first ">{this.props.name}</div>{" "}
            <div className="row">
              <SoundIcon className="mx-auto border hover:border-sky-500 w-6" />
              <PrintIcon
                className="mx-auto border hover:border-sky-500 w-6"
                onClick={this.props.printNextQueue}
              />
            </div>
          </div>
          <div className="text-center pt-3 pb-10">
            <span className="block">Antrian</span>
            <span className="text-3xl">
              {this.props.currentQueue} 
            </span>
          </div>
          <div>
            <div className="flex justify-between">
              <a href="#/" onClick={this.props.goToPreviousQueue}>
                {this.props.previousQueue && (
                  <div className="order-first bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
                    Kembali ke-{this.props.previousQueue}
                  </div>
                )}
              </a>
              <a href="#/" onClick={this.props.goToNextQueue}>
                {this.props.nextQueue && (
                  <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
                    Lanjut ke-{this.props.nextQueue}
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

// export default function Counter(props) {
//   return (
//     <div className="bg-blue-100 rounded-md px-5 py-3">
//       <div className="flex flex-col">
//         {/* <div>{this.props.name}</div> */}
//         <div className="flex justify-between">
//           <div className="order-first ">{this.props.name}</div>{" "}
//           <div className="row">
//             <SoundIcon className="mx-auto border hover:border-sky-500 w-6"/>
//             <PrintIcon className="mx-auto border hover:border-sky-500 w-6" onClick={this.printNextQueue} />
//           </div>
//         </div>
//         <div className="text-center py-8">
//           <span className="block">Antrian</span>
//           <span className="text-3xl">
//             {this.props.currentQueue}
//             {/* <a href="/">
//               <SoundIcon className="mx-auto border hover:border-sky-500" />
//             </a> */}
//           </span>
//         </div>
//         <div>
//           <div className="flex justify-between">
//             <a href="#/">
//               {this.props.previousQueue && (
//                 <div className="order-first bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
//                   Kembali ke-{this.props.previousQueue}
//                 </div>
//               )}
//             </a>
//             <a href="#/">
//               {this.props.nextQueue && (
//                 <div className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1">
//                   Lanjut ke-{this.props.nextQueue}
//                 </div>
//               )}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
