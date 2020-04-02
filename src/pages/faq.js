import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Layout from '../components/layout'

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  const getFAQs = () => {
    axios
      .get('https://api.covid19india.org/faq.json')
      .then((response) => {
        setFaq(response.data.faq);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
        <div className="FAQ">
      {faq.map((faq, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{animationDelay: `${0.5 + index * 0.1}s`}}
          >
            <h2 className="question">{faq.question}</h2>
            <h2 className="answer">{faq.answer}</h2>
          </div>
        );
      })}
    </div>

    <div id="webchat"/>
        <script src="https://storage.googleapis.com/mrbot-cdn/webchat-latest.js"></script>
        // Or you can replace latest with a specific version
        <script>
        WebChat.default.init({
            selector: "#webchat",
            initPayload: "/get_started",
            customData: {"language": "en"}, // arbitrary custom data. Stay minimal as this will be added to the socket
            socketUrl: "https://rasa.factly.in",
            socketPath: "/socket.io/",
            title: "Covid-19 Chatbot",
            subtitle: "Quesions about Covid-19",
        })
        </script>
    </Layout>
  );
}

export default FAQ;
