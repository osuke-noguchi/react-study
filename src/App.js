import { useCallback, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import { CssModule } from './components/CssModule';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
import { Home } from './Home';
import { Router } from './router/Router.jsx';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Router />
        <Home />
        <InlineStyle />
        <CssModule />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    </BrowserRouter>
  );
}

export default App;
