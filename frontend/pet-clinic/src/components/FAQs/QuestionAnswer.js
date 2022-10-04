import React, {Component} from "react";
import Faq from 'react-faq-component';

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How can I add my animal to this website?",
            content: "You just need to be a user and then click Owners and add new pet."
        },
        {
            title: "What kind of services does your clinic offer?",
            content: "hair cutting, nail cutting, washing, deworming"
        },
        {
            title: "How much does it cost to get my pet fixed?",
            content: "We have a price list which you can look at on the Price list tab on the Home page"
        },
        {
            title: "How often do you suggest check-ups for my pet?",
            content: "It depends on the animal. in the case of dogs, once a month or every two months, in the case of cats, it may be less often."
        },
        {
            title: "Do I need an appointment?",
            content: "If you have a profile we will contact you about an appointment."
        },
    ]
}

export  default class QuestionAnswer extends Component {
    render() {
        return (
            <div>
                <Faq data={data}/>
            </div>
        )
    }
}