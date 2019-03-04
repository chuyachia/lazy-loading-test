import React, {lazy, Suspense} from 'react';
//import ComponentA from './components/ComponentA';
//import ComponentB from './components/ComponentB';
import ErrorBoundary from './ErrorBoundary';
const ComponentA = lazy(()=>import('./components/ComponentA'));
const ComponentB = lazy(()=>import('./components/ComponentB'));
const ComponentC = lazy(()=>import('./components/ComponentC'));

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDisplay : "a",
      errorComponent:null
    }
  }
  render() {
    return (<div>
      {this.state.errorComponent&&<div>Something went wrong</div>}
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary handleError={()=>this.setState({errorComponent:"a"})}> 
        {this.state.currentDisplay==="a"&&<ComponentA/>}
        </ErrorBoundary> 
        <ErrorBoundary handleError={()=>this.setState({errorComponent:"b"})}> 
        {this.state.currentDisplay==="b"&&<ComponentB/>}
        </ErrorBoundary> 
        <ErrorBoundary handleError={()=>this.setState({errorComponent:"c"})}> 
        {this.state.currentDisplay==="c"&&<ComponentC/>}
        </ErrorBoundary> 
      </Suspense>
      <button onClick={()=>this.setState({currentDisplay: this.state.currentDisplay==="a"?"b":"a",
      errorComponent:null})}>
        Change component
      </button>
      <button onClick={()=>this.setState({currentDisplay:"c",errorComponent:null})}>
        Non existing component
      </button>
      </div>)
  }
}
