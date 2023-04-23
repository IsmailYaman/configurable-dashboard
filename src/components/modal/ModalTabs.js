/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const ModalTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const renderTabContent = () => {
        const activeTabContent = tabs.find((tab) => tab.tabIndex === activeTab);

        return activeTabContent && activeTabContent.tabContent;
    };

    return (
        <div>
            <div className="tabs flex justify-center tabs-boxed mt-3 py-3">
                {tabs.map((tab) => (
                    <a
                        key={tab.tabIndex}
                        className={`tab ${
                            activeTab === tab.tabIndex ? 'tab-active' : ''
                        }`}
                        onClick={() => handleTabClick(tab.tabIndex)}
                    >
                        {tab.tabTitle}
                    </a>
                ))}
            </div>
            <div
                className="tab-content rounded-md p-3 mt-2"
                style={{ backgroundColor: '#242933' }}
            >
                {renderTabContent()}
            </div>
        </div>
    );
};

export default ModalTabs;
