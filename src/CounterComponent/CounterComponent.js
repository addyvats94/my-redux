import React from "react";
import { connect } from "react-redux";
import { incMethod, decMethod, increaseMethod, decreaseMethod } from "./action";

const CounterComponent = props => {
//   increment = () => {
//     this.props.dispatch({
//       type: "INCREMENT"
//     });
//   };

//   decrement = () => {
//     this.props.dispatch({
//       type: "DECREMENT"
//     });
//   };

  
    return (
      <div className="App mt-5">
        <button onClick={props.incCount} className="btn btn-success mr-5">
          Increment
        </button>
        <button onClick={props.decCount} className="btn btn-danger">
          Decrement
        </button>
        <button onClick={props.increaseCount} className="btn btn-danger">
          Increase
        </button>
        <button onClick={props.decreaseCount} className="btn btn-danger">
          Decrease
        </button>
        <h2 className="mt-5 display-1">{props.count}</h2>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    count: state.countChange.count
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incCount: () =>  dispatch(incMethod()),
        decCount: () => dispatch(decMethod()),
        increaseCount: () => dispatch(increaseMethod()),
        decreaseCount: () => dispatch(decreaseMethod()),
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);
