const reactRoot = document.getElementById('root');

const myFirstEl = React.createElement('ul', {}, [
    React.createElement('li', {}, 'my first element'),
    React.createElement('li', {}, 'my second element'),
    React.createElement('li', {}, 'my third element')
]);
const myStr = "my string item"

const myJSXEl = (
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>{myStr}</li>
    </ul>
)
ReactDOM.render(myJSXEl, reactRoot);