import React from 'react';
import { connect } from 'react-redux';


function Counter(props){

    console.log('render', props)

    return(
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>increment</button>
        </div>
    )
}

// mapping State to Props
function mapStateToProps(state){
    console.log('mapStateToProps', state);
    return{
        count: state.count
    }
}

// mapping Dispatch to Props
function mapDispatchToProps(dispatch){

    return{
        onIncrementClick: () => {
            console.log("click")
            const action = { type: 'INCREMENT' }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);