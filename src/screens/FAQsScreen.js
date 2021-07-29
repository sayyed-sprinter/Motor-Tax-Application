import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFAQs } from '../actions/faqsAction';
import FAQs from '../components/Faqs';
import MessageBar from '../components/MessageBar';
import Loader from '../components/Loader';

const FAQsScreen = () => {
  const dispatch = useDispatch();

  const faqsData = useSelector((state) => state.getFAQs);
  const { loading, error, faqs } = faqsData;

  useEffect(() => {
    dispatch(getFAQs());
  }, [dispatch]);

  return (
    <section className='faqs-container' id='faqs-container'>
      <h1 className='heading-1 faqs-heading'>Frequently asked questions</h1>
      {loading ? (
        error ? (
          <MessageBar error='true' text={error} />
        ) : (
          <Loader />
        )
      ) : (
        <FAQs faqs={faqs} />
      )}
    </section>
  );
};

export default FAQsScreen;
