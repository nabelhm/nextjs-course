'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from "react";
import CounterPage from '../../app/dashboard/counter/page';

export interface CounterResponse {
  method: string;
  count:  number;
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const data = fetch('/api/counter').then(res => res.json());
  console.log(data)
  return data;
}

export const CartCounter = () => {
  // const [counter, setCounter] = useState( value );
  const counter = useAppSelector( state => state.counter.count );
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(counter));
  // }, [dispatch])

  useEffect(() => {
    getApiCounter()
      .then( ({ count }) => dispatch( initCounterState(count) ) );
  }, [dispatch])
  
  return (
    <>
      <span className="text-7xl">{counter}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
          -1
        </button>
      </div>
    </>
  )
} 