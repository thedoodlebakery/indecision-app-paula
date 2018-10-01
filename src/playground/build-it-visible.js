
let visibility = false;

const showDetails = () =>{
    visibility = !visibility;
    render();
}

const appRoot = document.getElementById("app");
const render = () => {
    const show = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={showDetails}>
        { visibility ? 'Hide Details' : 'Show Details'}</button>

        { visibility && (
         <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
        )}
    </div>
    );

    ReactDOM.render(show, appRoot);
 };
 
render();

