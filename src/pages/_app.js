import "@/styles/globals.css";
import Layout from "./layout";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import { setGlobalData } from "@/redux/slices/globalSlice";

// ✅ Component name should start with a capital letter
const LoadToken = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) dispatch(setGlobalData(token));
    }
  }, [dispatch]);

  return null;
};

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* ✅ Just call the LoadToken component here */}
      <LoadToken />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </Provider>
  );
}
