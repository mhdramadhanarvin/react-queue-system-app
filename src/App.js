// import logo from './logo.svg';
import "./App.css";
import React from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import config from "./config";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    initializeApp(config);
    this.database = getDatabase();

    this.state = {
      data: [],
      showing: false,
    };
  }

  componentDidMount() {
    this.getLists();
    document.body.classList.add("bg-blue-100");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.writeUserData();
  //   }
  // }

  // writeUserData = () => {
  //   getDatabase().ref("/").set(this.state);
  //   console.log("DATA SAVED");
  // };

  getLists = () => {
    const posts = ref(this.database, "counter");
    onValue(posts, (snapshot) => {
      const state = snapshot.val();
      this.setState({data: state});
    });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let name = this.refs.name.value;
  //   let role = this.refs.role.value;
  //   let uid = this.refs.uid.value;

  //   if (uid && name && role) {
  //     const { developers } = this.state;
  //     const devIndex = developers.findIndex((data) => {
  //       return data.uid === uid;
  //     });
  //     developers[devIndex].name = name;
  //     developers[devIndex].role = role;
  //     this.setState({ developers });
  //   } else if (name && role) {
  //     const uid = new Date().getTime().toString();
  //     const { developers } = this.state;
  //     developers.push({ uid, name, role });
  //     this.setState({ developers });
  //   }

  //   this.refs.name.value = "";
  //   this.refs.role.value = "";
  //   this.refs.uid.value = "";
  // };

  // removeData = (developer) => {
  //   const { developers } = this.state;
  //   const newState = developers.filter((data) => {
  //     return data.uid !== developer.uid;
  //   });
  //   this.setState({ developers: newState });
  // };

  // updateData = (developer) => {
  //   this.refs.uid.value = developer.uid;
  //   this.refs.name.value = developer.name;
  //   this.refs.role.value = developer.role;
  // };

  render() {
    const { data } = this.state; 
    const { showing } = this.state;

    return (
      <>
        <div className="container mx-auto py-10">
          <div className="flex justify-between mb-10">
            <div className="order-first bg-blue-600 text-3xl text-white rounded-full px-8 py-3">
              Aplikasi Sistem Antrian
            </div>
            <div className="text-xl text-slate-400 pt-6">Version 1.0</div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-4 p-5">
            <div className="bg-white row-span-2 col-span-2 rounded-md p-8">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 mb-5"
                onClick={() => this.setState({ showing: !showing })}
              >
                TAMBAH ANTRIAN
              </button>
              {showing ? (
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Masukkan nama antrian"
                    className="bg-gray-50 border text-md border-gray-500 rounded-lg px-2 py-1 mr-1"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 mb-5 mr-1">
                    Simpan
                  </button>
                  <button
                    className="bg-slate-400 hover:bg-slate-500 text-white rounded-lg px-3 py-1 mb-5"
                    onClick={() => this.setState({ showing: !showing })}
                  >
                    Batal
                  </button>
                </div>
              ) : null}
              <div className="grid grid-cols-4 gap-4">
                {data.map((item) => (
                  <Counter
                    key={item.id}
                    id={item.id}
                    currentQueue={item.queue.current}
                    nextQueue={item.queue.next}
                    previousQueue={item.queue.previous}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
