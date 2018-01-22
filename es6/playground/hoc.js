import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, please do not share!</p>}

      { props.isAdmin ? <WrappedComponent {...props}/> : <p> You don't have an access to the admin data. Ask for entry here</p>}
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAut ? (
        <Info {...props} />
      ) : (
        <p>You are not authorized to enter this page!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const RequireAut = requireAuthentication(Info);



ReactDOM.render(<RequireAut isAut={true} info="there are the details" isAdmin={true}/>, document.getElementById('app'))
