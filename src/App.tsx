import React, { Component } from "react";

import "./App.css";

// interface TitleProps {
//   title: string;
//   test?: string;
// }

// const Title = ({ title, test = "qweqweqwe" }: TitleProps) => (
//   <h1>
//     {title} {test}
//   </h1>
// );

// const App = () => <Title title="Hello world" />;

// export default App;

// ------------------------------------------------------------------------------------------------------
// interface CounterState {
//   count: number;
// }

// interface CounyerProps {
//   title?: string;
// }

// class Counter extends Component<CounyerProps, CounterState> {
//   constructor(props: CounyerProps) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   static defaultProps: CounyerProps = {
//     title: "Counter:",
//   };

//   static getDerivedStateFromProps(props: CounyerProps, state: CounterState): CounterState | null {
//     return false ? { count: 2 } : null;
//   }

//   componentDidMount(): void {}

//   shouldComponentUpdate(nextProps: CounyerProps, nextState: CounterState): boolean {
//     return true;
//   }

//   handleClickIncrement = () => {
//     this.setState(({ count }) => ({ count: ++count }));
//   };
//   handleClickDecrement = () => {
//     this.setState(({ count }) => ({ count: --count }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.title}
//           {this.state.count}
//         </h1>
//         <button onClick={this.handleClickIncrement}>+1</button>
//         <button onClick={this.handleClickDecrement}>-1</button>
//       </div>
//     );
//   }
// }

// const App = () => <Counter title="Counter:" />;

// export default App;
// ---------------------------------------------------------------------------------------------
// interface CounterState {
//   count: number;
// }

// interface CounyerProps {
//   title?: string;
// }

// class Counter extends Component<CounyerProps, CounterState> {
//   constructor(props: CounyerProps) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   static defaultProps: CounyerProps = {
//     title: "Counter:",
//   };

//   handleClickIncrement = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
//     console.log(`${e.clientX}${e.clientY}`);

//     this.setState(({ count }) => ({ count: ++count }));
//   };
//   handleClickDecrement = () => {
//     this.setState(({ count }) => ({ count: --count }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.title}
//           {this.state.count}
//         </h1>
//         <button onClick={this.handleClickIncrement}>+1</button>
//         <button onClick={this.handleClickDecrement}>-1</button>
//         <a href="@" onClick={this.handleClickIncrement}>
//           Link
//         </a>
//       </div>
//     );
//   }
// }

// const App = () => <Counter title="Counter:" />;

// export default App;
// -------------------------------------------------------------------

// class Form extends Component<{}, {}> {
//   handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submitted");
//   };

//   handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//     console.log(e.currentTarget);
//   };

//   handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     console.log("Coppied");
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleOnSubmit}>
//         <label>
//           Simple text:
//           <input type="text" name="text" onFocus={this.handleFocus} onCopy={this.handleCopy} />
//           <button type="submit">Submit</button>
//         </label>
//       </form>
//     );
//   }
// }

// const App: React.FC = () => <Form />;

// export default App;

// -------------------------------------------------------------------

interface Positions {
  id: string;
  value: string;
  title: string;
}

interface FormState {
  inputText: string;
  textAreaText: string;
  selectText: string;
  showData: {
    name: string;
    text: string;
    position: string;
  };
}

const POSITIONS: Array<Positions> = [
  {
    id: "fd",
    value: "Front-end Developer",
    title: "Front-end Developer",
  },
  {
    id: "bd",
    value: "Front-end Developer",
    title: "Front-end Developer",
  },
];

const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
const styles: React.CSSProperties = { display: "block", marginBottom: "10px" };

class Form extends Component<{}, FormState> {
  state = {
    inputText: "",
    textAreaText: "",
    selectText: DEFAULT_SELECT_VALUE,
    showData: {
      name: "",
      text: "",
      position: "",
    },
  };

  private rootRef = React.createRef<HTMLSelectElement>();

  hadbleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    this.setState({ inputText });
  };

  handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {
      target: { value: textAreaText },
    } = e;
    this.setState({ textAreaText });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const {
      target: { value: selectText },
    } = e;
    this.setState({ selectText });
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const { inputText, textAreaText, selectText } = this.state;

    this.setState({
      inputText: "",
      textAreaText: "",
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textAreaText,
        position: selectText,
      },
    });
  };

  render() {
    const { inputText, textAreaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input type="text" value={inputText} onChange={this.hadbleInputChange} />
          </label>

          <label style={styles}>
            Text:
            <textarea value={textAreaText} onChange={this.handleTextAreaChange}></textarea>
          </label>

          <select
            style={styles}
            value={selectText}
            onChange={this.handleSelectChange}
            ref={this.rootRef}
          >
            <option value="" disabled>
              Select an options
            </option>
            <option value="I will be Front-end Developer">I will be Front-end Developer</option>
            <option value="I will be Back-end Developer">I will be Back-end Developer</option>
            <option value="I will be Full-stack Developer">I will be Full-stack Developer</option>
          </select>

          <button type="submit" onClick={this.handleShow}>
            Button
          </button>
          <ul>
            <li>{name}</li>
            <li>{text}</li>
            <li>{position}</li>
          </ul>
        </form>
      </>
    );
  }
}

const App: React.FC = () => <Form />;

export default App;
