import React, { useEffect, useState } from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { saveRating } from '../actions/ratingAction';
import Loader from './Loader';
import MessageBar from './MessageBar';

const Rating = () => {
  const dispatch = useDispatch();

  const { loading, success, error, taxpayerinfo } = useSelector(
    (state) => state.taxpayer
  );

  const [starOne, fillStarOne] = useState(false);
  const [starTwo, fillStarTwo] = useState(false);
  const [starThree, fillStarThree] = useState(false);
  const [starFour, fillStarFour] = useState(false);
  const [starFive, fillStarFive] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (starOne && !starTwo && !starThree && !starFour && !starFive) {
      setRating(1);
    }
    if (starOne && starTwo && !starThree && !starFour && !starFive) {
      setRating(2);
    }
    if (starOne && starTwo && starThree && !starFour && !starFive) {
      setRating(3);
    }
    if (starOne && starTwo && starThree && starFour && !starFive) {
      setRating(4);
    }
    if (starOne && starTwo && starThree && starFour && starFive) {
      setRating(5);
    }
    if (success && rating > 0) {
      dispatch(saveRating({ rating, id: taxpayerinfo.recordId }));
    }
  }, [
    starOne,
    starTwo,
    starThree,
    starFour,
    starFive,
    rating,
    dispatch,
    success,
    taxpayerinfo,
  ]);

  const starOneClickHandler = () => {
    fillStarOne(true);

    fillStarTwo(false);
    fillStarThree(false);
    fillStarFour(false);
    fillStarFive(false);
  };

  const starTwoClickHandler = () => {
    fillStarTwo(true);
    fillStarOne(true);

    fillStarThree(false);
    fillStarFour(false);
    fillStarFive(false);
  };

  const starThreeClickHandler = () => {
    fillStarThree(true);
    fillStarTwo(true);
    fillStarOne(true);

    fillStarFour(false);
    fillStarFive(false);
  };

  const starFourClickHandler = () => {
    fillStarFour(true);
    fillStarThree(true);
    fillStarTwo(true);
    fillStarOne(true);

    fillStarFive(false);
  };

  const starFiveClickHandler = () => {
    fillStarFive(true);
    fillStarFour(true);
    fillStarThree(true);
    fillStarTwo(true);
    fillStarOne(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBar type='error' error={error} />
      ) : (
        <section className='rating-container'>
          <section className='stars'>
            <section className='star star-1'>
              {starOne ? (
                <TiStarFullOutline onClick={() => starOneClickHandler()} />
              ) : (
                <TiStarOutline onClick={() => starOneClickHandler()} />
              )}
            </section>
            <section className='star star-2'>
              {starTwo ? (
                <TiStarFullOutline onClick={() => starTwoClickHandler()} />
              ) : (
                <TiStarOutline onClick={() => starTwoClickHandler()} />
              )}
            </section>
            <section className='star star-3'>
              {starThree ? (
                <TiStarFullOutline onClick={() => starThreeClickHandler()} />
              ) : (
                <TiStarOutline onClick={() => starThreeClickHandler()} />
              )}
            </section>
            <section className='star star-4'>
              {starFour ? (
                <TiStarFullOutline onClick={() => starFourClickHandler()} />
              ) : (
                <TiStarOutline onClick={() => starFourClickHandler()} />
              )}
            </section>
            <section className='star star-5'>
              {starFive ? (
                <TiStarFullOutline onClick={() => starFiveClickHandler()} />
              ) : (
                <TiStarOutline onClick={() => starFiveClickHandler()} />
              )}
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Rating;
