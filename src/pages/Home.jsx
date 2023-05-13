import React, { useState, useEffect } from "react"
import { getData, updateData } from "./../config/firebaseRealtimeDatabase" 
import Counter from "./../components/Counter"
import Alert from "./../components/Alert"
import Form from "./../components/Form"
import Button from "./../components/Button"

const Home = () => {
  const [alert, setAlert] = useState({
    show: false,
  })
  const [form, setForm] = useState(false)
  const [queue, setQueue] = useState({
    data: [],
  })

  useEffect(() => {
    fetchData()
  }, [queue])

  // [START] function for interaction to Firebase Realtime DB
  const fetchData = async () => {
    const data = await getData()
    setQueue({ data })
  }

  const sendData = (data) => {
    const rows = data.filter((n) => n)
    updateData(rows)
  }
  // [END]

  const toggleOpenForm = () => {
    setForm(!form)
  }

  const handleSubmit = (event, inputRef) => {
    event.preventDefault()
    const id = new Date().getTime().toString()
    const name = inputRef.current.value
    const { data } = queue
    let rows = [
      ...data,
      {
        id,
        name,
        queue: {
          current: 1,
          list: [1],
        },
      },
    ]

    sendData(rows)

    inputRef.current.value = ""
  }

  const printNextQueue = (item) => {
    const { data } = queue
    const index = data.indexOf(item)
    const list = item.queue.list

    // save next queue
    const next = list
      ? list[list.length - 1] + 1
      : parseInt(item.queue.current) + 1
    list ? item.queue.list.push(next) : (item.queue.list = [next])

    if (!item.queue.next) item.queue.next = next

    // save state and show alert sucess
    data[index] = item
    const alert = {
      message: `Berhasil mencetak nomor antrian ${next} untuk ${item.name}`,
      label: "success",
      show: true,
    }

    sendData(data)

    setAlert(alert)

    // timeout for hide the alert
    setTimeout(() => {
      setAlert({
        show: false,
      })
    }, 3000)
  }

  const goToNextQueue = (item) => {
    const { data } = queue
    const index = data.indexOf(item)
    const list = item.queue.list

    // modify current item
    const indexInList = list.indexOf(item.queue.current)
    item.queue.current = list[indexInList + 1]
    item.queue.next = list[indexInList + 2] ?? null
    item.queue.previous = list[indexInList]

    // save state
    data[index] = item

    sendData(data)
  }

  const goToPreviousQueue = (item) => {
    const { data } = queue
    const index = data.indexOf(item)
    const list = item.queue.list

    // modify current item
    const indexInList = list.indexOf(item.queue.current)
    item.queue.current = list[indexInList - 1]
    item.queue.next = list[indexInList]
    item.queue.previous = list[indexInList - 2] ?? null

    // save state
    data[index] = item

    sendData(data)
  }

  return (
    <>
      {alert.show && <Alert message={alert.message} />}

      <Button type="button" text="Tambah Antrian" onClick={toggleOpenForm} />

      {form && <Form onSubmit={handleSubmit} onCancel={toggleOpenForm} />}
      <div className="grid grid-cols-4 gap-4">
        {queue.data &&
          queue.data.map((item) => (
            <Counter
              key={item.id}
              id={item.id}
              name={item.name}
              currentQueue={item.queue.current}
              nextQueue={item.queue.next}
              previousQueue={item.queue.previous}
              printNextQueue={() => {
                printNextQueue(item)
              }}
              goToNextQueue={() => {
                goToNextQueue(item)
              }}
              goToPreviousQueue={() => {
                goToPreviousQueue(item)
              }}
            />
          ))}
      </div>
    </>
  )
}

export default Home
