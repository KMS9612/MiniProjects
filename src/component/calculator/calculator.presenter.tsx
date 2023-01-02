import * as Cal from "./calculator.styles";

export default function CalculatorPresenter(props: any) {
  return (
    <Cal.Wrapper>
      <Cal.Bar>{props.number}</Cal.Bar>
      <Cal.Floor>
        <Cal.Btn onClick={props.onClickReset}>C</Cal.Btn>
        <Cal.Btn id="*">*</Cal.Btn>
        <Cal.Btn id="+">/</Cal.Btn>
        <Cal.Btn>=</Cal.Btn>
      </Cal.Floor>
      <Cal.Floor>
        <Cal.Btn id="7" onClick={props.onClickNumber}>
          7
        </Cal.Btn>
        <Cal.Btn id="8" onClick={props.onClickNumber}>
          8
        </Cal.Btn>
        <Cal.Btn id="9" onClick={props.onClickNumber}>
          9
        </Cal.Btn>
        <Cal.Btn id="">+</Cal.Btn>
      </Cal.Floor>
      <Cal.Floor>
        <Cal.Btn id="4" onClick={props.onClickNumber}>
          4
        </Cal.Btn>
        <Cal.Btn id="5" onClick={props.onClickNumber}>
          5
        </Cal.Btn>
        <Cal.Btn id="6" onClick={props.onClickNumber}>
          6
        </Cal.Btn>
        <Cal.Btn id="">-</Cal.Btn>
      </Cal.Floor>
      <Cal.Floor>
        <Cal.Btn id="1" onClick={props.onClickNumber}>
          1
        </Cal.Btn>
        <Cal.Btn id="2" onClick={props.onClickNumber}>
          2
        </Cal.Btn>
        <Cal.Btn id="3" onClick={props.onClickNumber}>
          3
        </Cal.Btn>
        <Cal.Btn id="0" onClick={props.onClickNumber}>
          0
        </Cal.Btn>
      </Cal.Floor>
    </Cal.Wrapper>
  );
}
