import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Outlet />
    </RecoilRoot>
  );
}
