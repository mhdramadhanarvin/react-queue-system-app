import "./App.css";
import React from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import config from "./config";
import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    initializeApp(config);
    this.database = getDatabase();

    this.nameRef = React.createRef();

    this.state = {
      data: [],
      showing: false,
      alert: null,
    };
  }

  componentDidMount() {
    this.getLists();
    document.body.classList.add("bg-blue-100");
  }

  writeQueueData = () => {
    const { data } = this.state;
    set(ref(this.database, "counter"), data);
  };

  getLists = () => {
    const posts = ref(this.database, "counter");
    onValue(posts, (snapshot) => {
      const state = snapshot.val() ?? [];
      this.setState({ data: state });
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime().toString();
    let name = this.nameRef.current.value;
    const queue = {
      current: 1,
      list: [1],
    };
    const { data } = this.state;
    data.push({ id, name, queue });
    this.setState({ data });
    this.writeQueueData();

    this.nameRef.current.value = "";
  };

  printNextQueue = (item) => {
    const { data } = this.state;
    const index = data.indexOf(item);
    const list = item.queue.list;

    const next = list
      ? list[list.length - 1] + 1
      : parseInt(item.queue.current) + 1;
    list ? item.queue.list.push(next) : (item.queue.list = [next]);

    if (!item.queue.next) item.queue.next = next;

    data[index] = item;
    const alert = {
      message: `Berhasil mencetak nomor antrian ${next} untuk ${item.name}`,
      label: "success",
    };
    this.setState({ data, alert });
    this.writeQueueData();

    setTimeout(() => {
      this.setState({
        alert: null,
      });
    }, 3000);
  };

  goToNextQueue = (item) => {
    const { data } = this.state;
    const index = data.indexOf(item);
    const list = item.queue.list;

    // modify current item
    const indexInList = list.indexOf(item.queue.current);
    item.queue.current = list[indexInList + 1];
    item.queue.next = list[indexInList + 2] ?? null;
    item.queue.previous = list[indexInList];
    // listPrevious.push(item.queue.current)
    // item.queue.previous = item.queue.current;
    // if (!listPrevious) {
    //   item.queue.listPrevious = [item.queue.current];
    // } else {
    //   listPrevious.unshift(item.que3ue.current);
    // }
    // item.queue.current = listNext[0];
    // item.queue.next = listNext[1] ?? null;
    // listNext.shift();

    data[index] = item;

    this.setState({ data });
    this.writeQueueData();
  };

  goToPreviousQueue = (item) => {
    const { data } = this.state;
    const index = data.indexOf(item);
    const listPrevious = item.queue.listPrevious ?? [];
    const listNext = item.queue.listNext ?? [];

    console.log({ listPrevious, listNext });
  };

  render() {
    let { data } = this.state;
    const { showing } = this.state;
    // const rows = data
    // data = null

    // rows.map((row) => {
    //   let current = row.queue.current;
    //   let next = row.queue.next;
    //   let previous = row.queue.previous;

    //   // mapping queue current data
    //   if (current.toString().length === 1) {
    //     row.queue.current = `00${current}`;
    //   } else if (current.toString().length === 2) {
    //     row.queue.current = `0${current}`;
    //   }
    //   // mapping queue next data
    //   if (next.toString().length === 1) {
    //     row.queue.next = `00${next}`;
    //   } else if (next.toString().length === 2) {
    //     row.queue.next = `0${next}`;
    //   }
    //   // mapping queue previous data
    //   if (previous && previous.toString().length === 1) {
    //     row.queue.previous = `00${previous}`;
    //   } else if (previous && previous.toString().length === 2) {
    //     row.queue.previous = `0${previous}`;
    //   }

    //   return row
    // });

    // console.log(this.state.data)

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
              {this.state.alert && (
                <div
                  className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 mb-5"
                  role="alert"
                >
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                  </svg>
                  <p>{this.state.alert.message}</p>
                </div>
              )}
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1 mb-5"
                onClick={() => this.setState({ showing: !showing })}
              >
                TAMBAH ANTRIAN
              </button>
              {showing ? (
                <div className="mb-5">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      ref={this.nameRef}
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
                      className="bg-slate-400 hover:bg-slate-500 text-white rounded-lg px-3 py-1 mb-5"
                      onClick={() => this.setState({ showing: !showing })}
                    >
                      Batal
                    </button>
                  </form>
                </div>
              ) : null}
              <div className="grid grid-cols-4 gap-4">
                {data.map((item) => (
                  <Counter
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    currentQueue={item.queue.current}
                    nextQueue={item.queue.next}
                    previousQueue={item.queue.previous}
                    printNextQueue={() => this.printNextQueue(item)}
                    goToNextQueue={() => this.goToNextQueue(item)}
                    goToPreviousQueue={() => this.goToPreviousQueue(item)}
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
