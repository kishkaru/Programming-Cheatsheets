import React from 'react';
import { Component } from 'react';

// Enclose block with () to write JSX

// Class-based component (stateful, lifecyle hooks)
class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

// Functional component (stateless, no lifecycle hooks)
const Person = (props) => {
  return (
  { 
    <h1>{props.name}</h1>
    <h2>{props.children}</h2>
  });
}

export default Person
---
// Setting the state of an object (causes re-render)

import Person from './Components/Person';

state = {
  name: null
};

this.setState({
  name: 'hello'
});

this.setState( (prevState, props) => {
  return {
    name: prevState.name + 'world'
  };
});

render() {
  return (
    <p>Some text { foo() }</p>
    <Person />
    <Person name="Max">Children text</Person>
    <Person name={this.state.name}>Children text</Person>
  )
}

---
// Button / input handler functions

switchHandler = () => {
  this.setState({
    persons: []
  });
}

switchHandler2 = (name) => {
  this.setState({
    persons: name
  });
}

<button onClick={this.switchHandler}>Click Me</button>
<button onClick={this.switchHandler2.bind(this, 'Max')}>Click Me</button>
<button onClick={() => this.switchHandler2('Max')}>Click Me</button>

// Input changed listener
<Input onChange={(event) => inputChangeHandler(event, formElement.id)}/>

inputChangeHandler = (event, inputId) => { 
  // Create the updated nested state
  const updatedStateObj = {
    ...this.state.obj,
    [inputId]: {
      ...this.state.obj[inputId],
      value: event.target.value
    }
  };

  // Save the updated nested state
  this.setState({obj: updatedStateObj});
}

---
// Conditionally show JSX

{ this.state.showPersons ? 
  <div></div>
  : 
  null
}

{ this.state.showPersons &&
  <div></div>
}

persons = null;
if (this.state.showPersons) {
  persons = (<div></div>);
}

return({persons});

---
// Always update state in an immutatble fashion (make a copy first)

const charList = [...this.state.text].map((c, i) => {
   return <CharComponent char={c} key={i} onClick={() => this.deleteCharHandler(i)} />
});

----
// Using CSS styling with React

import './UserStyle.css';

// class -> className
// background-color -> backgroundColor
const style = {
  backgroundColor: 'white',
  font: 'inherit'
};

<h1 style={style}></h1>

// Programatically add CSS classes
const classes = [];
if (this.state.persons.length < 2)
  classes.push('red');

<p className={classes.join(' ')} />

// Import CSS as JS classes
import classes from './Person.css';

<div className={classes.Person} />

// Radium 3rd party module gives dynamic CSS classes
import Radium from 'radium';
export default Radium(App);

const style = {
  ':hover': {
    color: 'black'
  },
  '@media (min-width: 500px)': {
    width: '450px'
  }
}

// Must wrap App with StyleRoot to use Radium
<StyleRoot>
  <div className="App"</div>
</StyleRoot>

// Styled Components 3rd party module, wrap existing JSX elements
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  @media (min-width: 500px) {
    width: 450px;
  };
  background-color: ${props => props.alt ? 'red' : 'green'};
`
<StyledDiv alt={this.trueFalseMethod}/>

---
npm install react-transition-group

import CSSTransition from 'react-transition-group/CSSTransition';

const animationTiming = {
  enter: 1000,
  exit: 500
};

<CSSTransition
  in={this.state.showBlock}
  timeout={animationTiming}
  mountOnEnter
  unmountOnExit
  onEnter={() => console.log('enter')}
  classNames={{
    enter: '',
    enterActive: 'my-class-enter-active',
    exit: '',
    exitActive: 'my-class-exit-active'
  }}
  >
    <div />
</CSSTransition>

.my-class-enter-active {
  animation: openModal 0.4s ease-out forwards;
}

.my-class-exit-active {
  animation: closeModal 0.4s ease-out forwards;
}

---
// component lifecycle (creation)
constructor(props)
getDerivedStateFromProps(props, state)
render()
Render Child Components
componentWillMount()
componentDidMount() // important

// component lifecycle (update)
getDerivedStateFromProps(props, state)
shouldComponentUpdate(nextProps, nextState) // T/F important
render()
Update Child Component props
getSnapshotBeforeUpdate(prevProps, prevState)
componentDidUpdate(prevProps, prevState, snapshot) // important (fetch data from server)

---
// auto check if any prop changes

import { PureComponent } from 'react';

class MyClass extends PureComponent { } 

---
// Return mulitple components in one element
// as array
return [
  <p key='i1'>ele1</p>
  <p kye='i2'>ele2</p>
]

// using aux wrapper
cont aux = props => props.children;
export default aux;
<Aux></Aux> // usage

// using React Fragment
<React.Fragment>
</React.Fragment>

// Using higher order function (hoc)
const WithClass = props => {
  <div className={props.classes}>{props.children}</div>
}
export default WithClass;
<WithClass classes={classes.App}></WithClass> // usage

// HOC any JSX element
const withClass = (WrappedComponent, className) => {
  return (props) => {
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  };
};
export default withClass;
export default withClass(App, classes.App); // usage

--
// Props strict type checking via 3rd party module
npm install --save prop-types

import PropTypes from 'prop-types';

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

---
// Reference element in dom
// create a binding definition first
constructor(props) {
  this.inputEleRef = React.createRef();
}

// bind the JSX element
<input ref={this.inputEleRef}></input>
<input ref={(inputEle) => {this.inputElement = inputEle}} //alt
// use the binding
this.inputEleRef.current.click()

// useRef to reference element
import { useRef } from 'react';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  toggleBtnRef.current.click()
}

--
// Access data w/o passing data around in props
const AuthContext = React.createContext({
  login: () => {}
});
export default AuthContext;

import AuthContext from 'auth-context';

// bind a Provider first
<AuthContext.Provider value={{login: () => {} }}>
</AuthContext>

// then consume
<AuthContext.Consumer>
  { (context) => <button onClick={context.login}></button> }
</AuthContext.Consumer>

// alt w/ React Hooks
import { useContext } from 'react';
import { AuthContext } from 'auth-context';

const authContext = useContext(AuthContext);
authContext.login();

--
// React routing
npm install react-router-dom

import { BrowserRouter } from 'react-router-dom';

// turn on routing first
return (
  <BrowserRouter basename="/my-app"> // optional base URI for app
    <div className="App">
    </div>
  </BrowserRouter>
);

import { Route, Switch, Redirect } from 'react-router-dom';

<Switch> // optional, only match one of the routes
  // if route matches, render jsx
  <Route path='/' render={() => <div /> } />
  // render component
  <Route path='/' exact component={Posts} />
  // reach another route
  <Redirect from='/' to='/posts' />
  // catch-all route - redirect all remaining routes
  <Redirect to='/' />
  // catch-all route (404 page)
  <Route render={() => <h1>Not Found</h1>} />
</Switch>

// route parameter
<Route path="/:id" exact component={Post} />
this.props.match.params.id

// conditional redirect
let redirect = null;
if (this.state.submitted)
  redirect = <Redirect to='/posts' />;
{redirect}
// or navigate programatically
this.props.history.replace('/posts');
this.props.history.push('/' + id); //back button works

// disable route conditionally
{this.state.auth && <Route />}

// make child components route-aware
import { withRouter } from 'react-router-dom';
export default withRouter(post);

---
// Navigation via Links
import { Link } from 'react-router-dom';

// absolute path
<Link to='/'>Home</Link>
<Link to={{ pathname: '/elsewhere', hash: '#h1', search: '?username=foobar' }}>Elsewhere</Link>
// relative path
<Link to={{ pathname: this.props.match.url + '/other/path' + '#somePos' + '?key=val'}} />

const query = new URLSearchParams(this.props.location.search); // access search
let params = new Map(query.entries());
params.get('username')
this.props.location.hash // access hash

// CSS stylize active route
import { NavLink } from 'react-router-dom';
<NavLink to="/" exact activeClassName="my-active" activeStyle={{color: 'blue'}} >Home</NavLink>

---
// lazy load components to save space React 16.6+
const Posts = React.lazy(() => import('./containers/Posts'));

import { Suspense } from 'react';

<Route path='/posts' render={() => (<Suspense fallback={<div>Loading</div>}><Posts /><Suspense> )} /> 

---
// Persistent storage via Redux
npm install redux react-redux

// Define reducer storage and actions
const initialState = {
  counter: 0,
  results: []
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val
      }
    case 'DEL_RES':
      const newArr = state.results.filter(e => e.id !== action.id)
      return {
        ...state,
        results: newArr
      }
    // always make a copy of state first, before mutating (except for integer types)
  }
  return state;
}
export default reducer;


import { createStore } from 'redux';
import { provider } from 'react-redux';

const store = createStore(reducer);

// Wrap App with Provider first
ReactDOM.render(<Provider store={store}><App /></Provider>)

// Use reducer in components
import { connect } from 'react-redux';

<input>
  value={this.props.ctr}
  onClick={this.props.onIncrement}
  onSubmit={() => this.props.onDel(this.id) }
</input>

// mapper from component props to reducer state
const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
};

// mapper from component functions to reducer actions
const mapDispatchToProps = (dispatch) => {
  onIncrement: () => dispatch({type: 'INC'}),
  onAdd: () => dispatch({type: 'ADD', val: 10}),
  onDel: (id) => dispatch({type: 'DEL_RES', id: id})
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Unlock Redux devtools
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

process.env.ENV_VAR

---
// Testing
npm install jest
npm install enzyme react-test-renderer enzme-adapter-react-16

import { configure, shallow } from 'enzyme';
import Adapter from 'enzme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<NavItems />', () => {
  const wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavItems />);
  });

  it('should be visible', () => {
    expect(wrapper.find(NavItem).toEqual(true));
  });

  it('should be visible with 3 elements', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavItem).toHaveLength(3));
  });

  it('should have a logout nav item', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.contains(<NavItem link='logout'>Logout</NavItem>));
  });
});

---
// Deploying app

1) Adjust base path (BrowserRouter)
2) npm run build
3) deploy the contents of /build

---
// Next.js (for routing)

import Link from 'next/link';
import Router from 'next/router';

<p>Go to <Link href="/auth"><a>Auth</a></Link></p>
<button onClick={() => Router.push('/auth')}>Go to Auth</button>

<div>
  <style jsx>{`
    div {
      border: 1px;
      padding: 20px;
    }
  `}</style>
</div>

// Initialize the props before the page is loaded
// class based
static async getInitialProps(context) {
  // retrieve data from server
  await whateverAsyncMethod()
  return {appName: 'super duper'};
}

// function based
const IndexPage = (props) => ();

IndexPage.getInitialProps = context => {
  return {appName: 'super duper'};
}

-----
// React Hooks (16.8+)
import { useState } from 'react';

const app = () => {
  // Set initial state
  // Returns list of [currState, funcToChangeState]
  const [personsState, setPersonsState] = useState({
    name: 'foo',
    persons: null
  });

  // update state
  setPersonsState({
    persons: []
  });

  // update state w/ access to current state
  setPersonsState((currState) => ({
    name: currState.name,
    persons: []
  }));

  const onChange = (event) => {
    const newPersons = event.target.value;
    setPersonsState({
      persons: newPersons
    });
  }

  // If single variable
  onChange={event => setPersonsState(event.target.value)}
}

---
import { userEffect } from 'react';

const app = (props) => {

  // runs after each component render cycle
  useEffect( () => {
    ; // execute work
    // (optional) cleanup work. Function runs before next iteration
    return () => {

    }
  }, [props.persons]); //rerun condition (variable). [] for never (run only aftr first render)
}

---
import { useCallBack } from 'react';

// Wraps any function to cache it (don't recreate on rerender)
const myFunc = useCallBack(arg => { 
  // function
})

import { userMemo } from 'react';

// Wraps a function to cache it
const ingList = userMemo(() => {
  <IngList 
    ings={userIngs}
  />
}, [userIngs])

---
import { useReducer } from 'react';

const httpReducer = (currHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE:
      return { ...currHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMsg };
    case 'CLEAR':
      return { loading: false, error: null };
    default:
      throw new Error('should not be reached');
  }
}

// Returns list of [currState, action dispatcher]
const [httpState, dispatch] = useReducer(httpReducer, []);

// User dispatcher to set states
dispatch({type: 'CLEAR'})
