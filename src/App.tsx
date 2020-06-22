import React from 'react'
import './App.css'
import { buildReplyText } from 'line-message-builder'

const App: React.FC = () => {
  const getEmail = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID as string }).then(() => {
      const accessToken = liff.getAccessToken();
      if (accessToken) {
        /*
        fetch(`https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        */
        const idToken = liff.getDecodedIDToken();
        console.log(idToken)
      }
    })
  }
  return (
    <div className="App">
      <button className="button" onClick={getEmail}>
        Send Message
      </button>
    </div>
  )
}

export default App
