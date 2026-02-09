'use client'

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"

export const WidgetGrid = () => {
    const inCart = useAppSelector(state => state.counter.count);
  
    return (
      <div className="flex flex-wrap p-2 justify-center items-center">
        <SimpleWidget 
          title={ `${inCart}` }
          subtitle="Productos agregados"
          label="Contador"
          icon={ <IoCartOutline size={ 70 } className="text-blue-600" /> }
          href="/dashboard/counter"
          hrefLabel="Ir al contador"
        />
      </div>
  )
}