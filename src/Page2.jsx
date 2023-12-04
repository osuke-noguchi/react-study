import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <div>
      <h1>Page2のページです</h1>
      <Link to="/page2/200">URL Parameter</Link>
      <br/>
      <Link to="/page2/200?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
