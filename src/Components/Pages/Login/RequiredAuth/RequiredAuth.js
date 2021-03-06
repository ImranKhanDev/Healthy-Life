import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const RequiredAuth = ({ children, ...rest }) => {
  const { user } = useAuth();
  let location = useLocation();
  if (user.email) {
    return children;
  }
  return <Navigate to="/login"
  state={{from:location}}
  ></Navigate>
};

export default RequiredAuth;
