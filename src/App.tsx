import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { createContext } from "vm";

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

// interface Positions {
//   id: string;
//   value: string;
//   title: string;
// }

// interface FormState {
//   inputText: string;
//   textAreaText: string;
//   selectText: string;
//   showData: {
//     name: string;
//     text: string;
//     position: string;
//   };
// }

// const POSITIONS: Array<Positions> = [
//   {
//     id: "fd",
//     value: "Front-end Developer",
//     title: "Front-end Developer",
//   },
//   {
//     id: "bd",
//     value: "Front-end Developer",
//     title: "Front-end Developer",
//   },
// ];

// const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
// const styles: React.CSSProperties = { display: "block", marginBottom: "10px" };

// class Form extends Component<{}, FormState> {
//   state = {
//     inputText: "",
//     textAreaText: "",
//     selectText: DEFAULT_SELECT_VALUE,
//     showData: {
//       name: "",
//       text: "",
//       position: "",
//     },
//   };

//   private rootRef = React.createRef<HTMLSelectElement>();

//   hadbleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const {
//       target: { value: inputText },
//     } = e;
//     this.setState({ inputText });
//   };

//   handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
//     const {
//       target: { value: textAreaText },
//     } = e;
//     this.setState({ textAreaText });
//   };

//   handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
//     const {
//       target: { value: selectText },
//     } = e;
//     this.setState({ selectText });
//   };

//   handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     e.preventDefault();
//     const { inputText, textAreaText, selectText } = this.state;

//     this.setState({
//       inputText: "",
//       textAreaText: "",
//       selectText: DEFAULT_SELECT_VALUE,
//       showData: {
//         name: inputText,
//         text: textAreaText,
//         position: selectText,
//       },
//     });
//   };

//   render() {
//     const { inputText, textAreaText, selectText, showData } = this.state;
//     const { name, text, position } = showData;

//     return (
//       <>
//         <form>
//           <label style={styles}>
//             Name:
//             <input type="text" value={inputText} onChange={this.hadbleInputChange} />
//           </label>

//           <label style={styles}>
//             Text:
//             <textarea value={textAreaText} onChange={this.handleTextAreaChange}></textarea>
//           </label>

//           <select
//             style={styles}
//             value={selectText}
//             onChange={this.handleSelectChange}
//             ref={this.rootRef}
//           >
//             <option value="" disabled>
//               Select an options
//             </option>
//             <option value="I will be Front-end Developer">I will be Front-end Developer</option>
//             <option value="I will be Back-end Developer">I will be Back-end Developer</option>
//             <option value="I will be Full-stack Developer">I will be Full-stack Developer</option>
//           </select>

//           <button type="submit" onClick={this.handleShow}>
//             Button
//           </button>
//           <ul>
//             <li>{name}</li>
//             <li>{text}</li>
//             <li>{position}</li>
//           </ul>
//         </form>
//       </>
//     );
//   }
// }
// const App: React.FC = () => <Form />;

// export default App;

// -------------------------------------------------------------------

// interface PrtalProps {
//   children: React.ReactNode;
// }

// class Portal extends Component<PrtalProps> {
//   private el: HTMLDivElement = document.createElement("div");

//   public componentDidMount(): void {
//     document.body.appendChild(this.el);
//   }

//   public componentWillUnmount(): void {
//     document.body.removeChild(this.el);
//   }

//   public render(): React.ReactElement<PrtalProps> {
//     return ReactDOM.createPortal(this.props.children, this.el);
//   }
// }

// class MyComponent extends Component<{}, { count: number }> {
//   state = {
//     count: 0,
//   };

//   handleClick = () => {
//     this.setState(({ count }) => ({
//       count: ++count,
//     }));
//   };

//   render() {
//     return (
//       <div onClick={this.handleClick}>
//         <h1>Clicks: {this.state.count}</h1>
//         <Portal>
//           <h2>TEST PORTAL</h2>
//           <button>Click</button>
//         </Portal>
//       </div>
//     );
//   }
// }
// const App: React.FC = () => <MyComponent />;
// export default App;

// -------------------------------------------------------------------

// interface IContext {
//   isAuth: boolean;
//   toggleAuth: () => void;
// }

// const AuthContext = React.createContext<IContext>({
//   isAuth: false,
//   toggleAuth: () => {},
// });

// // new syntex of static property
// class Login extends Component {
//   static contextType = AuthContext;
//   context!: React.ContextType<typeof AuthContext>;

//   render() {
//     const { toggleAuth, isAuth } = this.context;

//     return <button onClick={toggleAuth}>{!isAuth ? "Login" : "Logout"}</button>;
//   }
// }

// // old variant with Consumer
// const Profile: React.FC = (): React.ReactElement => (
//   <AuthContext.Consumer>
//     {({ isAuth }: IContext) => <h1>{!isAuth ? "Please log in" : "You are logged in"}</h1>}
//   </AuthContext.Consumer>
// );

// // Root component
// class Context extends Component<{}, { isAuth: boolean }> {
//   readonly state = {
//     isAuth: false,
//   };

//   toggleAuth = () => {
//     this.setState(({ isAuth }) => ({ isAuth: !isAuth }));
//   };

//   render() {
//     const { isAuth } = this.state;
//     const context: IContext = { isAuth, toggleAuth: this.toggleAuth };

//     return (
//       <AuthContext.Provider value={context}>
//         <Login />
//         <Profile />
//       </AuthContext.Provider>
//     );
//   }
// }

// const App: React.FC = () => <Context />;
// export default App;

// ---------------------------useState-------------------------------
// const [value, setValue] = useState<number | undefined>(undefined);
// const [value, setValue] = useState<Array<number>>([]);

// interface IUser {
//   name: string;
//   age?: number;
// }

// const [user, setUser] = useState<IUser>({ name: "Denys" });

// // ------------------------useRef-----------------------------------

// const ref1 = useRef<HTMLElement>(null!);
// const ref1 = useRef<HTMLElement | null>(null);

// ------------------------useContext-----------------------------------

// interface ITheme {
//   backgroundColor: string;
//   color: string;
// }

// // Context creation
// const ThemeContext = createContext<ITheme>({
//   backgroundColor: "black",
//   color: "white",
// });

// // Accessing context in a child component
// const ThemeContext = useContext<ITheme>(ThemeContext);

// ------------------------useReducer-----------------------------------

// interface State {
//   count: number;
// }

// type Action = { type: "increment" | "decrement" };

// const counterReducer = ({ count }: State, { type }: Action) => {
//   switch (type) {
//     case "increment":
//       return { count: count + 1 };
//     case "decrement":
//       return { count: count - 1 };

//     default:
//       return {};
//   }
// };

// const [state, dispatch] = useReducer(counterReducer, { count: 0 });

// dispatch({ type: "increnemt" });
// dispatch({ type: "decrement" });

// ------------------------Components of higher order-----------------------------------

// interface BaseProps {
//   primTitle: string;
//   secTitle: string;
// }

// interface InjectedProps {
//   toggleStatus: Boolean;
//   toggle: () => void;
// }

// const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => (
//   <button onClick={toggle}>{toggleStatus ? primTitle : secTitle}</button>
// );

// const withToggle = <BaseProps extends InjectedProps>(
//   PassedComponent: React.ComponentType<BaseProps>
// ) => {
//   return (props: BaseProps) => {
//     const [toggleStatus, toggle] = useState(false);

//     return (
//       <PassedComponent
//         {...(props as BaseProps)}
//         toggle={() => toggle(!toggleStatus)}
//         toggleStatus={toggleStatus}
//       />
//     );
//   };
// };

// const ToggleButton = withToggle(Button);
// const App: React.FC = () => <ToggleButton primTitle="Maint Title" secTitle="Additional Title" />;
// export default App;
// // -----------------------------------Spinner-------------------------------------------

// interface WithLoadingProps {
//   loading: Boolean;
// }

// const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
//   class withLoading extends React.Component<P & WithLoadingProps> {
//     render() {
//       const { loading, ...props } = this.props;
//       return loading ? <LoadingSpinner /> : <Component {...props} />;
//     }
//   };
