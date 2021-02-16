import Header from "./Header";

const App = () => {
    const str1 = 'my own string'
    return (
        <div className="container">
            <Header />
            <ul>
                <li>item 1</li>
                <li>{str1}</li>
            </ul>
        </div>
    );
}
// https://youtu.be/ABQLwlE8MUA?list=PLfuZzro3POlY8ZqHtHzZ994_xSsFC7mUA&t=4482
export default App;