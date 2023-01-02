import { MouseEvent, useState } from "react";
import CalculatorPresenter from "./calculator.presenter";

let arr = [];
export default function CalculatorContainer() {
  const [number, setNumber] = useState("");

  // 수 저장 함수
  const onClickNumber = (event: MouseEvent<HTMLDivElement>) => {
    arr.push(event.currentTarget.id);
    setNumber(arr.join(""));
  };

  // 연산자를 여러개 사용하려면 어떻게 해야하는가
  /** 연산자 함수 */
  const onClickSomeOperator = (event: MouseEvent<HTMLDivElement>) => {
    let operator = event.currentTarget.id;
    arr.push(operator);
    console.log(arr);
    setNumber(arr.join(""));
  };

  /** 숫자를 Reset시키는 함수 */
  const onClickReset = () => {
    setNumber("");
    arr = [];
  };

  const onClickAnswer = () => {};

  return <CalculatorPresenter onClickSomeOperator={onClickSomeOperator} number={number} onClickNumber={onClickNumber} onClickReset={onClickReset} />;
}
