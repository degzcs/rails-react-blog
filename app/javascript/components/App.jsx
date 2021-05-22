import React, { useState } from 'react';
import Routes from "../routes/Index";
import ErrorMessage from '../components/ErrorMessage/index.jsx'

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)

  const handleError = (errorMessage) => {
    setErrorMessage({errorMessage})
  }

  const clearError = () => {
    setErrorMessage(null)
  }

  return (
    <>
      {
        errorMessage && (
            <ErrorMessage errorMessage={errorMessage} />)
      }
      <Routes
        handleError={handleError}
        clearError={clearError}
      />
    </>
  )
}

export default App;
