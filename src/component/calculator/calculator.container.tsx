import { MouseEvent, useState } from "react";
import CalculatorPresenter from "./calculator.presenter";

let arr = [];
export default function CalculatorContainer() {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  console.log("넘버1", number);
  console.log("넘버2", number2);

  // 연산자를 누르기 전엔 Number1이 저장 연산자를 눌럿을땐 Number2에 저장
  const onClickNumber = (event: MouseEvent<HTMLDivElement>) => {
    arr.push(event.currentTarget.id);

    console.log(arr);
    setNumber(arr.join(""));
  };

  /** 숫자를 Reset시키는 함수 */
  const onClickReset = () => {
    setNumber("");
  };

  const onClickAnswer = () => {};

  return <CalculatorPresenter number={number} onClickNumber={onClickNumber} onClickReset={onClickReset} />;
}
