import useCustomers from "./app/hooks/castomer/useCustomers";
import { Fragment } from "react";

function App() {
  const {customers} = useCustomers();

  return (
    <div style={{margin: '0 auto', maxWidth: '1200px', padding: '0 16px'}}>
      {customers.length > 0 && (
        <Fragment>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', marginBottom: '24px', borderBottom: '2px solid #85d763'}}>
              <strong>Customers</strong><span>total: {customers.length}</span>
          </div>
          <ul style={{padding: 0, margin: 0}}>
            {customers.map((c) => (
            <li key={c.id} style={{listStyle: 'none', marginBottom: '8px', padding: '8px', borderRadius: '8px', border: '1px solid #ececec', boxShadow: '-1px 1px 2px 0px #ececec'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display:"flex", flex: 1}}>
                  <span style={{display: 'inline-block', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', boxShadow: '-1px 1px 2px 0px #ececec', marginRight: '16px'}}>
                    <img style={{width: '100%'}} src={c.avatar} alt="" />
                    </span>
                  <div>
                    <strong>{`${c.firstName} ${c.lastName}`}</strong><br/>
                    <span>{c.id}</span>
                  </div>
                </div>
                <button style={{background: 'none', border: '1px solid #85d763', color: '#85d763',outlineColor: '#85d763',  borderRadius: '24px', cursor: 'pointer', padding: '0 16px', height: '40px', textWrap: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis', boxShadow: '-1px 1px 2px 0px #ececec'}}>
                  Learn more
                  </button>
              </div>
            </li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
}

export default App;
