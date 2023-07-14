import React from 'react';
import { HeaderTitleActionType, IHeaderTitle } from './types';
import { useLocation } from 'react-router-dom';

const initState: IHeaderTitle={
    title: "",
    description: ""
}

const HeaderReducer = (state = initState, action: any) => {

    switch (action.type) {
        case HeaderTitleActionType.OVERVIEW:{
            return {
                ...state,
                title: "Overview",
                description: "Get summary of your weekly online transactions here."
            };
        }
        case HeaderTitleActionType.SETTINGS:{
            return {
                ...state,
                title: "Settings",
                description: "Set up your profile."
            };
        }
    }
    return state
};

export default HeaderReducer;