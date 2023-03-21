import React from "react";
import useFaqs from "./../hooks/useFaqs";
import Loading from "./../shared/Loading";

const FAQ = () => {
  const { faqs, loading } = useFaqs();
  return (
    <div className="px-8 md:px-20 mx-auto my-20" id="faq">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
          {faqs?.map((faq) => (
            <>
              <div
                className="max-w-sm overflow-hidden shadow-lg rounded-xl"
                key={faq?.id}
              >
                <div className="collapse">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">
                    {faq?.question?.en}
                  </div>
                  <div className="collapse-content">
                    <p>{faq?.answer?.en}</p>
                  </div>
                </div>

                {/*       <div
                  tabIndex={0}
                  key={faq?.id}
                  className="collapse collapse-plus bg-base-100 bg-shadow"
                >
                  <div className="collapse-title text-xl font-medium"></div>
                  <div className="collapse-content"></div>
                </div> */}
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
