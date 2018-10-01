let count = 0;
const addOne = () =>{
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne');
};

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
};




const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// var user = {
//     name: 'Paula',
//     age: 34,
//     location: 'Chicago, IL'
// };

// // var userName = 'Mike';
// // var userAge =  33;
// // var userLocation = 'Austin, TX';

// var templateTwo = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>Location: {user.location}</p>
//     </div>
// );

