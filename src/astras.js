export const Astras = (props) => {
  return(
    <div>
      <h1 style={{ color: props.color ? 'red' : 'black' }}>{props.name}</h1>
      <p>{props.code}</p>
      <p>{props.hierarchy}</p>
    </div>
  );
};
