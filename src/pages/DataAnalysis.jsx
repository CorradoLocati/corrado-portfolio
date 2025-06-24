import React, { useState, useEffect } from 'react';

const timeline = [
  {
    title: "Stock Price Prediction with Macro Economic Factors",
    image: "/assets/VantagePoint01.jpg",
    description:
      "Data analysis for a company delivering financial data solutions to hedge funds. The entire analysis was performed with Excel and Python, and results were presented with PowerPoint. Actionable insights from earnings dates and related data for key companies in the Information Technology sector was searched. Patterns and relationships that could inform investment strategies for hedge fund clients were analysed. The goal was to improve hedge funds trading strategies by analysing the relationship between earnings announcements and stock price behaviour for selected companies. The price movement of three popular stocks was correlated with some macroeconomic factors, i.e., Consumer Price Index, Unemployment Rate, FED Funds Interest Rate, Reported Earnings Per Share, and Surprise Factor (difference between stock price and stock price prediction after each quarterly earnings report date, QERD).  Conclusions on which quarters are optimal for trading the stocks, which macro economic factos correlates the most with the stocks, and which is the best investing windows, i.e., which days interval before and after each QERD, per stock. In the Figure, the Apple stock price change arpind each QERD, and the correlation matrox between Apple stocks and the macro economic factors.",
  },
  {
    title: "Marketing Investigation on Game Shop Chain",
    image: "/assets/TurtleGames01.jpg",
    description:
      "Data analysis on data from a game shop (Turtle Games) chain with Python and R, to give suggestions for improving overall sales performance. Investigation on Data include gender, age, remuneration, spending score, loyalty points, education, language, platform, product, review and summary was conducted. Linear regression and multiple linear regressions were used, together with histograms, boxplots, correlation plot, decision tree analysis, k-means clustering, word cloud, polarity, and sentiment analysis. Conclusions were drawn, e.g., which cutomer group (customer remuneration and spending score) should be targeted by the marketing campaign, and feedback on the sentiment analysis was given. In the Figure, sentiment analysis on the \"Review\" posts on the Turtle Games website." ,
  },
  {
    title: "NHS Investigation on Managing Appointments",
    image: "/assets/NHS01.jpg",
    description:
      "Data on NHS appointment service were studied with Excel and Python, to improve the service and to optimize its resources. Unmapped information and use of Twitter were investigated. Seasonal trends were found, monthly appointmens per national category were ranked, and correlated with the monthly capacyty utulization. Also the time between booking an appointment and date of appointment, and the distribution of appointments by service settings were investigated. The most used Twitter hashtags were ranked. Conclusive suggestions were given. In the Figure, the sum of the monthly appointments by national category is shown.",
  },
  {
    title: "Statistics about Football Players",
    image: "/assets/BrightFuture01.jpg",
    description:
      "Data analysis for a company dealing with statistics about football players (Bright Future) was conducted using Tableau and Excel. Players’ details such as best skills, ball control, and penalties success were correlated with their age and othe rcharacteristics. In the Fugure, the distribution of players by age and the age group with ebest skills per body type are shown, together with the correlation between ball control and number of penalties by age.",
  },
  {
    title: "Marketing Investigation on Supermarket Chain",
    image: "/assets/2MarketTableau.jpg",
    description:
      "Sales and marketing data analysis for a supermarket chain (2Market) was performed, using Excel, SQL, and Tableau. Understanding the purchase behaviour of their customer and the correlation between customer’s demographic and spending habits, e.g., preferred products and amount spent. The research was conducted per country and among countries. The most sold items per country, marital status, and customer age were searched and correlated with the use of social media. Conclusions where drawn, to suggest the marketing team on which country, marital status, sold item, and social media focus the marketing campaign. In the Figure, one of the Tableau sheets with part of the analysis.",
  },
];

const DataAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);  

  return (
    <section className="bg-customGray py-16 px-4 sm:px-8 lg:px-32 text-black">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-green-700 inline-block">
          Data Analysis Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4 text-justify">
                {item.title}
              </h3>

              <p className="text-gray-700 text-justify mb-4 text-sm">
                {item.description}
              </p>

              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => setSelectedImage(item.image)}
                  className="w-auto max-w-full h-[160px] rounded shadow mx-auto cursor-zoom-in mt-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-screen-xl w-full px-4">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full h-auto max-h-screen rounded-lg object-contain mx-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DataAnalysis;
