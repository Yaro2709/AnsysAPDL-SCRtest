import React from 'react';
import { useTranslation } from 'react-i18next';
import { img } from 'entities/AnsysProject';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {
                Object.keys(img).map((item, index) => (
                    <img key={index} src={img[item]} alt={img[item]} />
                ))
            }
        </div>
    );
};

export default MainPage;
