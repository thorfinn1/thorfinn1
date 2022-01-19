
function Columns({title, p1, p2, p3, p4}) {
    return (
      <div className="space-y-3 text-sm text-gray-900">
          <h2 className="font-bold">{title}</h2>
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
      </div>
    );
  }
   
  export default Columns;