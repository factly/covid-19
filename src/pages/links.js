import React from 'react';
import Layout from '../components/layout'

function Links(props) {
  const links = [
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "HELPLINE NUMBERS [BY STATE]",
      "URL": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
    },
    {
      "Ministry or Organisation": "CDC",
      "Topic": "FAQs -Centers for Disease Control and Prevention",
      "URL": "https://www.cdc.gov/coronavirus/2019-ncov/faq.html"
    },
    {
      "Ministry or Organisation": "CDC",
      "Topic": "What to Do If You Are Sick",
      "URL": "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html"
    },
    {
      "Ministry or Organisation": "GoI",
      "Topic": "COVID-19 Inter-Ministerial Notifications",
      "URL": "https://covid19.india.gov.in/documents/"
    },
    {
      "Ministry or Organisation": "ICMR",
      "Topic": "COVID-19 FAQs",
      "URL": "https://www.icmr.gov.in/cfaqs.html"
    },
    {
      "Ministry or Organisation": "ICMR",
      "Topic": "List of COVID19 Testing Govt. and Pvt. labs",
      "URL": "https://covid.icmr.org.in/index.php/testing-facilities"
    },
    {
      "Ministry or Organisation": "ICMR",
      "Topic": "Newer Additional Strategies for COVID-19 Testing",
      "URL": "https://www.icmr.gov.in/pdf/covid/strategy/New_additional_Advisory_23062020_3.pdf"
    },
    {
      "Ministry or Organisation": "IIT-D",
      "Topic": "Prediction and Assesment of CoRona Infections and Transmission in India",
      "URL": "http://pracriti.iitd.ac.in/"
    },
    {
      "Ministry or Organisation": "Johns Hopkins University",
      "Topic": "Dashboard",
      "URL": "https://coronavirus.jhu.edu/map.html"
    },
    {
      "Ministry or Organisation": "MHA",
      "Topic": "State/ Union Territories Helpline For Covid-19",
      "URL": "https://www.mha.gov.in/sites/default/files/State-UT%20Helpline%20COVID19.pdf.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Caring for Health Care Warriors: Mental Health Support During COVID-19",
      "URL": "https://www.mohfw.gov.in/pdf/HCWMentalHealthSupportGuidanceJuly20201.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Guidelines for domestic travel (air/train/inter-state bus travel)",
      "URL": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Guidelines for Gated Residential Complexes Desirous of Setting Up Small Covid Care Facility by Resident Welfare Associations / Residential Societies /  NGOs ",
      "URL": "https://www.mohfw.gov.in/pdf/CovidCareFacilityinGatedcomplexes.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Guidelines for Home Isolation of very mild/ pre-symptomatic #COVID19 cases.",
      "URL": "https://youtu.be/JMeaFYCGxVw"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Guidelines for international arrivals",
      "URL": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Guidelines on preventive measures to contain spread of COVID-19 in workplace settings",
      "URL": "https://www.mohfw.gov.in/pdf/GuidelinesonpreventivemeasurestocontainspreadofCOVID19inworkplacesettings.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Mental Health in the times of COVID-19 Pandemic",
      "URL": "https://www.mohfw.gov.in/pdf/COVID19Final2020ForOnline9July2020.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "Revised guidelines for Home Isolation of very mild/pre-symptomatic/asymptomatic COVID-19 cases",
      "URL": "https://www.mohfw.gov.in/pdf/RevisedHomeIsolationGuidelines.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "SOP on preventive measures in Hotels and Other Hospitality Units to contain spread of COVID-19",
      "URL": "https://www.mohfw.gov.in/pdf/5SoPstobefollowedinHotelsandotherunits.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "SOP on preventive measures in Restaurants to contain spread of COVID-19",
      "URL": "https://www.mohfw.gov.in/pdf/3SoPstobefollowedinRestaurants.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "SOP on preventive measures in shopping malls to contain spread of COVID-19",
      "URL": "https://www.mohfw.gov.in/pdf/4SoPstobefollowedinShoppingMalls.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "SOP on preventive measures to contain spread of COVID-19 in offices",
      "URL": "https://www.mohfw.gov.in/pdf/1SoPstobefollowedinOffices.pdf"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "SOP on preventive measures to contain spread of COVID-19 in religious places/places of worship",
      "URL": "https://www.mohfw.gov.in/pdf/2SoPstobefollowedinReligiousPlaces.pdf"
    },
    {
      "Ministry or Organisation": "MyGov",
      "Topic": "Dashboard",
      "URL": "https://www.mygov.in/corona-data/covid19-statewise-status/"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "Coronavirus disease (COVID-19) advice for the public",
      "URL": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "Coronavirus disease (COVID-19) advice for the public: Myth busters",
      "URL": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "Coronavirus disease (COVID-19) advice for the public: When and how to use masks",
      "URL": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "Coronavirus disease (COVID-19) pandemic\n",
      "URL": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "Coronavirus disease (COVID-19) travel advice",
      "URL": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "WHO Coronavirus Disease (COVID-19) Dashboard",
      "URL": "https://covid19.who.int/"
    },
    {
      "Ministry or Organisation": "WHO",
      "Topic": "WHO- Q&As on COVID-19 and related health topics",
      "URL": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub"
    },
    {
      "Ministry or Organisation": "MoHFW",
      "Topic": "MINISTRY OF HEALTH AND FAMILY WELFARE, GOV. OF INDIA",
      "URL": "https://www.mohfw.gov.in/"
    },
    {
      "Ministry or Organisation": "The Base Lab",
      "Topic": "COVID-19 GLobal Tracker",
      "URL": "https://coronavirus.thebaselab.com/"
    }
   ]
  return (
    <Layout>
     {/*    <div className="Links">
      <div className="link fadeInUp" style={{animationDelay: '0.2s'}}>
        <h3>HELPLINE NUMBERS [by State]</h3>
        <a href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf">
          https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.3s'}}>
        <h3>Ministry of Health and Family Welfare, Gov. of India</h3>
        <a href="https://www.mohfw.gov.in/">https://www.mohfw.gov.in/</a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.4s'}}>
        <h3>WHO : COVID-19 Home Page</h3>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
          https://www.who.int/emergencies/diseases/novel-coronavirus-2019
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.5s'}}>
        <h3>CDC</h3>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">
          https://www.cdc.gov/coronavirus/2019-ncov/faq.html
        </a>
      </div>

      <div className="link fadeInUp" style={{animationDelay: '0.6s'}}>
        <h3>COVID-19 Global Tracker</h3>
        <a href="https://coronavirus.thebaselab.com/">
          https://coronavirus.thebaselab.com/
        </a>
      </div>
    </div> */}
    <div className="Links">
      {links.map((link,i)=>{
        return (<div className="link fadeInUp" style={{animationDelay: `${i*0.1}s`}}>
        <h3>{link.Topic} <span>({link["Ministry or Organisation"]})</span></h3>
        <a href={link.URL}>
          {link.URL}
        </a>
      </div>)
      })}
    </div>
    </Layout>
  );
}

export default Links;
