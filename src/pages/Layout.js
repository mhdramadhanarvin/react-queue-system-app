import { Outlet } from "react-router-dom"
import React, { useEffect } from "react"

const Layout = () => {

  useEffect(() => {
    document.body.classList.add("bg-blue-100") 
  }, [])

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
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
