import React, { Component } from 'react';

interface IStateProps {
  first: number;
  second: number;
  answer: string;
  value: string;
}

class Gugudan extends Component<{}, IStateProps> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    answer: '',
  }

  input: HTMLInputElement | null = null;

  onSubmitValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(this.state.value) === this.state.first * this.state.second) {
      this.setState((prev) => ({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        answer: `${prev.value}correct`,
      }));
      if (this.input) {
        this.input.focus();
      }
    } else {
      this.setState({
        answer: 'beep',
        value: '',
      });
      if (this.input) {
        this.input.focus();
      }
    }
  }

  onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  }

  inputRef = (c: HTMLInputElement) => {
    if (c) {
      c.focus();
    }
    this.input = c;
  }

  render() {
    const { first, second, value, answer } = this.state;
    return (
      <form onSubmit={this.onSubmitValue}>
        <div>
          <span>{first}</span>
          <span>*</span>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <span>{second}</span>
          <span>=</span>
          <input
            value={value}
            ref={this.inputRef}
            onChange={this.onChangeValue}
          />
        </div>
        <div>
          <span>
            {answer}
          </span>
        </div>
      </form>
    );
  }
}

export default Gugudan;
