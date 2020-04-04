import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="webchat"/>
        <script src="https://storage.googleapis.com/mrbot-cdn/webchat-latest.js"></script>
        <script dangerouslySetInnerHTML={{
        __html: `
              WebChat.default.init({
                  selector: "#webchat",
                  initPayload: "/get_started",
                  customData: {"language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
                  socketUrl: "https://rasa.factly.in",
                  socketPath: "/socket.io/",
                  title: "Covid-19 Chatbot",
                  subtitle: "Quesions about Covid-19",
              })`}}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
