import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSession } from '../api/api';

export const CategoriesSubSession = () => {
  const { sessions, subsessions } = useParams();
  const [data, setData] = useState(getSession(sessions, subsessions));

  useEffect(() => {
    setData(getSession(sessions, subsessions));
  }, [subsessions, sessions]);

  if (!data) {
    return <p>Loading or no data available...</p>;
  }

  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.desc}</p>
      <h5>{data.speaker.name}</h5>
      <p>{data.speaker.title} at {data.speaker.org}</p>
      <p>{data.speaker.bio}</p>
    </>
  );
};
