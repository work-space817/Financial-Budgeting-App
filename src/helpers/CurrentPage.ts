import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  path: string;
}

const CurrentPage = ({ path }: Props) => {
    const location = useLocation();
    const currentPage = location.pathname;
    console.log('currentPage: ', currentPage);
    switch (path) {
        case "/":
            return {
                title: "Overview",
                description: "Get summary of your weekly online transactions here."
            };
    
        default:
            break;
    }
};

export default CurrentPage;