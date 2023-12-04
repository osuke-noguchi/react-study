import { useParams } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterのページです</h1>
      <p>{id}です</p>
    </div>
  );
};
