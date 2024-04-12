import { Outlet, ScrollRestoration } from "react-router-dom";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <Outlet />
    </RecoilRoot>
  );
}
