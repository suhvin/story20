// 기본 import
import type { AppProps } from "next/app";
import { useEffect } from "react";

// chakra 관련 import
import { ChakraProvider } from "@chakra-ui/react";

// font 관련 import
import "../style/font/Pretendard/web/static/pretendard.css";
import "../style/font/Pretendard/web/static/pretendard-subset.css";

// theme 관련 import
import "@/style/theme/global.css";
import { theme } from "../style/theme";
import { extendedTheme } from "../style/theme";

// redux 관련 import
import { Provider, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { persistedReducer } from "@/store";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// react-query 관련 import
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

// util 관련 import
import { initLocalStorage } from "@/util/common/init/init-local-storage";

// styled-components
import styled from "@emotion/styled";

// redux
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

// react-query
export const queryClient = new QueryClient();

// App Component
const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    initLocalStorage(["persist:root"]); // "persist:root"
  }, []);

  return (
    <>
      {/* react-query */}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* redux */}
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {/* chakra */}
              <ChakraProvider theme={extendedTheme}>
                {/* 모바일 웹을 위한 컨테이너 */}
                <WebContainer>
                  <MobileContainer>
                    <Component {...pageProps} />
                  </MobileContainer>
                </WebContainer>
              </ChakraProvider>
            </PersistGate>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;

const WebContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.1);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
`;

const MobileContainer = styled.div`
  width: 420px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;
  @media screen and (max-width: 420px) {
    width: 100vw;
  }
`;
