import React, { createContext, useState, ReactNode } from 'react';

interface LoginPageContextProps {
  isLoginPageVisible: boolean;
  isRegisterPageVisible: boolean;
  handleToggleLoginPage: (isVisible: boolean) => void;
  handleToggleRegisterPage: (isVisible: boolean) => void;
}

export const LoginPageContext = createContext<LoginPageContextProps>({
  isLoginPageVisible: false,
  isRegisterPageVisible: false,
  handleToggleLoginPage: () => {},
  handleToggleRegisterPage: () => {},
});

interface LoginPageContextProviderProps {
  children: ReactNode;
}

const LoginPageContextProvider: React.FC<LoginPageContextProviderProps> = ({ children }) => {
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);
  const [isRegisterPageVisible, setIsRegisterPageVisible] = useState(false);

  const handleToggleLoginPage = (isVisible: boolean) => {
    setIsRegisterPageVisible(false);
    setIsLoginPageVisible(isVisible);
  };

  const handleToggleRegisterPage = (isVisible: boolean) => {
    setIsLoginPageVisible(false);
    setIsRegisterPageVisible(isVisible);
  };

  const contextValue: LoginPageContextProps = {
    isLoginPageVisible,
    isRegisterPageVisible,
    handleToggleLoginPage,
    handleToggleRegisterPage,
  };

  return (
    <LoginPageContext.Provider value={contextValue}>
      <div>{children}</div>
    </LoginPageContext.Provider>
  );
};

export default LoginPageContextProvider;
