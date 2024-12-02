import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Toolbox from '../components/organisms/Toolbox';
import MyColors from '../components/atoms/MyColors';
import { SkillCategory, SkillsDetails } from '../components/atoms/Skills';

function MySkills() {
  const [search, setSearch] = React.useState('');
  const [isEmpty, setIsEmpty] = React.useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const isEmptyDiv = document.getElementById('checkEmptyDiv');
    if (isEmptyDiv) {
      if (isEmptyDiv.innerHTML === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    }
  }, [search]);

  return (
    <div className="w-screen flex flex-col ">
      <Header textColor={MyColors.secondary} logoColor={MyColors.secondary} random />
      <div className="w-full bg-light flex flex-col pt-[10vh]">
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="w-[85%] sm:w-96 h-12 rounded border-[3px] border-dark text-dark text-xl text-center"
            placeholder={t('MySkills.search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center" id="checkEmptyDiv">
          <Toolbox
            title={t('MySkills.categories.mobileTools')}
            search={search}
            skills={
            Object
              .entries(SkillsDetails)
              .filter((skill) => skill[1].category === SkillCategory.mobileTools)
              .map((skill) => skill[1])
          }
          />
          <Toolbox
            title={t('MySkills.categories.webTools')}
            search={search}
            skills={
              Object
                .entries(SkillsDetails)
                .filter((skill) => skill[1].category === SkillCategory.webTools)
                .map((skill) => skill[1])
            }
          />
          <Toolbox
            title={t('MySkills.categories.backendTools')}
            search={search}
            skills={
              Object
                .entries(SkillsDetails)
                .filter((skill) => skill[1].category === SkillCategory.backendTools)
                .map((skill) => skill[1])
            }
          />
          <Toolbox
            title={t('MySkills.categories.otherTools')}
            search={search}
            skills={
              Object
                .entries(SkillsDetails)
                .filter((skill) => skill[1].category === SkillCategory.otherTools)
                .map((skill) => skill[1])
            }
          />
        </div>
        {isEmpty && (
        <div className="flex flex-col items-center justify-center h-[20vh]">
          <h1 className="text-4xl text-dark font-bold">
            {t('MySkills.noSkills')}
          </h1>
        </div>
        )}
      </div>
      <Footer random />
    </div>
  );
}

export default MySkills;
