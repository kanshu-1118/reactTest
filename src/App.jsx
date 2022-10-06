import { Test1 } from './Test1';

const App = (props) => {
    return (
        <div>
            < Test1 key={1} title={"タイトルはTest1のprops.Titleと繋がってる"} />
            < Test1 key={2} title={"タイトル2"} />
        </div>
    );
};

export default App;
