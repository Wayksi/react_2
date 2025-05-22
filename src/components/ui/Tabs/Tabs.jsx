import React, { useState } from "react";
import { Header, TabItem, TabButton, TabContent } from "./style";

function Tabs({ tabList = [], maxContentHeiht }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <Header>
                {tabList.map((tab, index) => (
                    <TabItem key={`tab${index * 10}`}>
                        <TabButton
                            $isActive={activeTab === index}
                            {...(activeTab === index
                                ? { as: "span" }
                                : {
                                    onClick: () => {
                                        setActiveTab(index)
                                    }
                                })}
                        >
                            {tab.title}
                        </TabButton>
                    </TabItem>
                ))}
            </Header>
            <TabContent $maxContentHeiht={maxContentHeiht}>
                {tabList[activeTab].content}
            </TabContent>
        </div>
    );
}

export default Tabs;
