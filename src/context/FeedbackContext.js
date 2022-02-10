import { createContext, useState, useEffect } from 'react';
import React from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback from db.json
  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:3000/feedback?_sort=id&_order=desc'
    );
    const data = await response.json();
    setFeedback(data);
  };

  // update feedback in the context
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:3000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );

    // fix for feedback edit loop
    setFeedbackEdit({ item: {}, edit: false });
  };

  // set item to be updated in ui
  const editFeedback = (feedbackItem) => {
    setFeedbackEdit({
      item: feedbackItem,
      edit: true,
    });
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to Delete?')) {
      await fetch(`http://localhost:3000/feedback/${id}`, {
        method: 'DELETE',
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch('http://localhost:3000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([...feedback, data]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
