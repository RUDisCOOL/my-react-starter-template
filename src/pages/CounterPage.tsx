import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  incremented,
  amountAdded,
  amountSubtracted,
  decremented,
} from "@/features/counter/counterSlice";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function CounterPage() {
  const [inputVal, setInputVal] = useState<number | null>(null);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleAddClick() {
    if (inputVal != null) {
      dispatch(amountAdded(inputVal));
    } else {
      dispatch(incremented());
    }
  }
  function handleSubClick() {
    if (inputVal != null) {
      dispatch(amountSubtracted(inputVal));
    } else {
      dispatch(decremented());
    }
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") {
      setInputVal(null);
    } else if (/^\d*$/.test(value)) {
      setInputVal(Number(value));
    }
  }

  return (
    <>
      <div className="flex h-full">
        <div className="m-auto w-max flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold ">CounterPage</h1>
          <Input
            type="text"
            value={inputVal ?? ""}
            inputMode="numeric"
            pattern="\d*"
            onChange={handleInputChange}
          />
          <div className="w-full gap-1 flex">
            <Button onClick={handleAddClick} className="cursor-pointer grow">
              Add <PlusCircle />
            </Button>
            <Button
              variant="destructive"
              onClick={handleSubClick}
              className="cursor-pointer grow">
              Sub <MinusCircle />
            </Button>
          </div>
          <p className="text-5xl font-semibold">{count}</p>
        </div>
      </div>
    </>
  );
}
