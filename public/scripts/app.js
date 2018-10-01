'use strict';

var visibility = false;

var showDetails = function showDetails() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById("app");
var render = function render() {
    var show = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now see!'
            )
        )
    );

    ReactDOM.render(show, appRoot);
};

render();
