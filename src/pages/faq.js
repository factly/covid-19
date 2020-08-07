import React from 'react';
import Layout from '../components/layout'

function FAQ(props) {

  const faqs = [
    { question: "కరోనా వైరస్ (COVID-19) అంటే ఏమిటి?", answer: "కరోనావైరస్ అనేది వైరస్ల యొక్క పెద్ద కుటుంబం. ఇవి జంతువులలో లేదా మానవులలో అనారోగ్యానికి కారణమవుతాయి. మానవులలో అనేక కరోనా వైరస్లు శ్వాసకోశ ఇన్ఫెక్షన్లు రావడానికి కారణమవుతాయి." },
    { question: "COVID-19 అంటే ఏమిటి?", answer: "COVID-19 అనేది ఇటీవల కనుగొన్న కరోనావైరస్ వల్ల కలిగే అంటు వ్యాధి. చైనాలోని వుహాన్‌ నుంచి దీని వ్యాప్తి ప్రారంభమైంది. 2019 డిసెంబర్ లో ఈ వ్యాధి ఉన్నట్లు గుర్తించారు." },
    {
      question: "COVID-19 యొక్క లక్షణాలు  లక్షణాలు", answer: "COVID-19 యొక్క సాధారణ లక్షణాలు జ్వరం, అలసట మరియు పొడి దగ్గు. కొందరు రోగులకు నొప్పులు, నాసికా రద్దీ, ముక్కు కారటం, గొంతు నొప్పి లేదా విరేచనాలు ఉండవచ్చు. ఈ లక్షణాలు సాధారణంగా తేలికపాటివి. ఇవి ఒక్కసారిగా కాకుండా ఒక్కొక్కటే నిదానంగా ప్రారంభమవుతాయి. COVID-19 తీవ్ర అనారోగ్యానికి గురిచేసి శ్వాస తీసుకోవడంలో ఇబ్బందిని కలిగిస్తుంది. ముసలివాళ్లు, మరియు అధిక రక్తపోటు, గుండె సమస్యలు లేదా మధుమేహం వంటి వైద్య సమస్యలతో అనారోగ్యంగా ఉన్నవారికి ఈ వైరస్ సోకే ప్రమాదం ఎక్కువగా ఉంటుంది."
    }, {
      question: "మిమ్మల్ని మీరు ఎలా రక్షించుకోవాలి?", answer: "కొన్ని సాధారణ జాగ్రత్తలు తీసుకోవడం ద్వారా మీరు COVID-19 బారిన పడే అవకాశాలను తగ్గించవచ్చు: 1. మీ చేతులను ఆల్కహాల్ బేస్డ్ హ్యాండ్ రబ్ తో క్రమం తప్పకుండా శుభ్రంగా శుభ్రపరచండి లేదా సబ్బు మరియు నీటితో కడగాలి. 2. మీకు మరియు దగ్గు లేదా తుమ్ము ఉన్నవారికి మధ్య కనీసం 1 మీటర్ (3 అడుగులు) దూరం నిర్వహించండి. 3. కళ్ళు, ముక్కు మరియు నోరు తాకడం మానుకోండి. 4. మీరు మరియు మీ చుట్టుపక్కల ప్రజలు మంచి శ్వాసకోశ పరిశుభ్రతను అనుసరిస్తున్నారని నిర్ధారించుకోండి.5. మీరు దగ్గు లేదా తుమ్ము ఉన్నప్పుడు మీ వంగిన మోచేయి లేదా కణజాలంతో మీ నోరు మరియు ముక్కును కప్పడం దీని అర్థం. అప్పుడు ఉపయోగించిన కణజాలాన్ని వెంటనే పారవేయండి.6. మీకు అనారోగ్యం అనిపిస్తే ఇంట్లో ఉండండి. మీకు జ్వరం, దగ్గు మరియు శ్వాస తీసుకోవడంలో ఇబ్బంది ఉంటే, వైద్య సహాయం తీసుకోండి మరియు ముందుగానే కాల్ చేయండి. మీ స్థానిక ఆరోగ్య అధికారం యొక్క సూచనలను అనుసరించండి. 7. తాజా COVID-19 హాట్‌స్పాట్‌లలో (COVID-19 విస్తృతంగా వ్యాప్తి చెందుతున్న నగరాలు లేదా స్థానిక ప్రాంతాలు) తాజాగా ఉండండి. వీలైతే, ప్రదేశాలకు వెళ్లడం మానుకోండి - ముఖ్యంగా మీరు పెద్దవారైతే లేదా డయాబెటిస్, గుండె లేదా lung పిరితిత్తుల వ్యాధి ఉంటే."
    }
  ]
  return (
    <Layout>
      <div className="FAQ">
        <ol className="info-page">
          <li><h2>కరోనా వైరస్ గురించి సమాచారం:</h2>
          <ul>
 {faqs.map((faq, index) => {
              return (
                <li
                  key={index}
                  className="faq fadeInUp"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <h3 className="question">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </li>
              );
            })}
          </ul>
           
          </li>
          <li><h2>కరోనా వైరస్: తరచుగా అడిగే  ప్రశ్నలు</h2>
            <a href="https://covid19.telangana.gov.in/wp-content/uploads/2020/03/coronavirus-telugu-faq.pdf">https://covid19.telangana.gov.in/wp-content/uploads/2020/03/coronavirus-telugu-faq.pdf</a>
          </li>
          <li><h2>అవగాహనా గీతాలు/ వీడియోలు</h2>
            <ul>
              <li> <p>అపర సైనికులకు వందనాలు (నిడివి 3:53 ని.లు)<br/><a href="https://www.youtube.com/watch?v=YzbauUD9pNc">https://www.youtube.com/watch?v=YzbauUD9pNc</a></p></li>
              <li> <p>ఆందోళన వద్దు...అప్రమత్తమవ్వండి (నిడివి 2:57 ని.లు)<br/><a href="https://www.youtube.com/watch?v=7yvxHV2ecCI">https://www.youtube.com/watch?v=7yvxHV2ecCI</a></p></li>
              <li> <p>కరోనాపై అవగాహనకై చిందు యక్షగానం (నిడివి 2:15 ని.లు)<br/><a href="https://www.youtube.com/watch?v=Gm5cYKw9gNs">https://www.youtube.com/watch?v=Gm5cYKw9gNs</a></p></li>
              <li> <p>కరోనాపై అవగాహనకై హరికథా గానం (నిడివి 3:15 ని.లు)<br/><a href="https://www.youtube.com/watch?v=ixVjyNB__J4">https://www.youtube.com/watch?v=ixVjyNB__J4</a></p></li>
              <li> <p>కరోనాపై అవగాహనకై తత్వాలు (నిడివి 0:56 ని.లు)<br/><a href="https://www.youtube.com/watch?v=bFeBhVKqscI">https://www.youtube.com/watch?v=bFeBhVKqscI</a></p></li>
              <li>  <p>కరోనా సోకకుండా ముందుజాగ్రత్తలు (నిడివి 1:30 ని.లు)<br/><a href="https://www.youtube.com/watch?v=5KK62993En0">https://www.youtube.com/watch?v=5KK62993En0</a></p></li>
              <li> <p>అప్రమత్తమై మేలుకోరో... ఆరోగ్య సూత్రాలు తెలుసుకోరో..(నిడివి 3:53 ని.లు)<br/><a href="https://www.youtube.com/watch?v=W4Q4bh-bFNE">https://www.youtube.com/watch?v=W4Q4bh-bFNE</a></p></li>
            </ul>
          </li>

          <li><h2>హెల్ప్‌లైన్, కంట్రోల్  రూమ్ నంబర్లు & క్యాంటీన్స్ జాబితా</h2>
            <ul>
              <li>తెలంగాణ రాష్ట్ర అత్యవసర హెల్ప్‌లైన్ నంబర్ : 104 <br />E-mail: <a href="mailto:covid19info-itc@telangana.gov.in">covid19info-itc@telangana.gov.in</a></li>
              <li>కంట్రోల్  రూమ్ నంబర్లు <br /><a href="https://covid19.telangana.gov.in/control-rooms/">https://covid19.telangana.gov.in/control-rooms/</a></li>
              <li>కేంద్ర ఆరోగ్య & కుటుంబ సంక్షేమ మంత్రిత్వ శాఖ హెల్ప్ లైన్ (టోల్ ఫ్రీ): 1075, +91-11-23978046 <br /></li>
              <li>వివిధ రాష్ట్రాల హెల్ప్‌లైన్ నంబర్లు: <br /><a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf">https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf</a></li>
              <li>క్యాంటీన్స్ జాబితా <br /><a href="https://covid19.telangana.gov.in/2020/03/28/list-of-meal-centers/">https://covid19.telangana.gov.in/2020/03/28/list-of-meal-centers/</a></li>
            </ul>
          </li>
          <li><h2>ఐసోలేషన్,క్వారంటైన్ మరియు పరీక్షా  కేంద్రాలు</h2>
            <ul>
              <li>చికిత్స కేంద్రాలు <br /> <a href="https://covid19.telangana.gov.in/health-facilities/treatment-facilities/">https://covid19.telangana.gov.in/health-facilities/treatment-facilities/</a>
              </li>
              <li>పరీక్షా  కేంద్రాలు<br /><a href="https://covid19.telangana.gov.in/health-facilities/testing-centres/">https://covid19.telangana.gov.in/health-facilities/testing-centres/</a></li>
            </ul>
          </li>
          <li><h2>తెలంగాణ ప్రభుత్వ ముఖ్యమైన ఆదేశాలు, మీడియా  బులెటిన్స్  మరియు లొక్డౌన్ ఆర్డర్స్</h2>
            <ul>
              <li>ప్రభుత్వ ముఖ్యమైన ఆదేశాలు, <a href="https://covid19.telangana.gov.in/government-orders/">https://covid19.telangana.gov.in/government-orders/</a></li>
              <li>మీడియా  బులెటిన్స్    <a href="https://covid19.telangana.gov.in/announcements/media-bulletins/">https://covid19.telangana.gov.in/announcements/media-bulletins/</a></li>
              <li>లొక్డౌన్ ఆర్డర్స్ <a href="https://covid19.telangana.gov.in/lockdown-faqs/ ">https://covid19.telangana.gov.in/lockdown-faqs/ </a></li>
              <li>కోవిద్ 19 రోగులు ఇంట్లోనే ఉండుటకు మార్గదర్శకాలు <a href="https://covid19.telangana.gov.in/wp-content/uploads/2020/06/COVID-19-Guidelines-Manual-Telugu-Version.pdf">https://covid19.telangana.gov.in/wp-content/uploads/2020/06/COVID-19-Guidelines-Manual-Telugu-Version.pdf</a></li>
            </ul>
          </li>
        </ol>

      </div>
    </Layout>
  );
}

export default FAQ;
