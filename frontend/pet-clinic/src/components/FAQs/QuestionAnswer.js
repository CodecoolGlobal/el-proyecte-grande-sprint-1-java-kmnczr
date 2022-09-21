import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

function AppFaqs() {
    return(
        <div class="block faqBlock">
            <div className="container-fluid">
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="How can I add my animal to this website?" key="1">
                        <p>You just need to be a user and then click Owners and add new pet. </p>
                    </Panel>
                    <Panel header="What kind of services does your clinic offer?" key="2">
                        <p>hair cutting, nail cutting, washing, deworming</p>
                    </Panel>
                    <Panel header="How much does it cost to get my pet fixed" key="3">
                        <p>We have a price list which you can look at on the Price list tab on the Home page</p>
                    </Panel>
                    <Panel header="How often do you suggest check-ups for my pet" key="4">
                        <p>It depends on the animal. in the case of dogs, once a month or every two months, in the case of cats, it may be less often.</p>
                    </Panel>
                    <Panel header="Do I need an appointment" key="5">
                        <p>If you have a profile we will contact you about an appointment.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
}

export default AppFaqs