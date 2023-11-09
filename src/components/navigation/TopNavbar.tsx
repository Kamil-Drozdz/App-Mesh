import TopNavbarPopoverUser from './TopNavbarPopoverUser';
import TopNavbarTooltipIcons from './TopNavbarTooltipIcons';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import EnglandIcon from '@/assets/united-kingdom-flag-icon.svg';
import { languageOptions, topNavbarIcons } from '@/data/navigation/topNavbarItems';
import useCurrentUser from '@/store/CurrentUser';
import useFullScreen from '@/store/FullScreen';
import useMenu from '@/store/Menu';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TopNavbarItem from './TopNavbarItem';

const TopNavbar = () => {
  const { t, i18n } = useTranslation();
  const { isFullScreen } = useFullScreen();
  const { currentUser } = useCurrentUser();
  const { toggleMenu } = useMenu();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {currentUser ? (
        <div
          className={`flex ${visible ? 'top-0' : '-top-16'}  ${
            isFullScreen ? '!absolute opacity-0' : 'opacity-100'
          } ease bg sticky top-8 z-[9] justify-between rounded-lg bg-white px-4 py-2 text-gray-800 shadow-md shadow-lightGray transition-all duration-300 dark:bg-mediumBlue dark:text-gray-300 dark:shadow-black print:hidden`}
        >
          <ul className='flex items-center space-x-2'>
            {topNavbarIcons.icons.map((icon, index) => (
              <TopNavbarItem index={index} icon={icon} toggleMenu={toggleMenu} />
            ))}
          </ul>
          <div className='flex items-center space-x-6'>
            <ul className='flex items-center space-x-2'>
              <>
                <Select onValueChange={(e) => i18n.changeLanguage(String(e))}>
                  <SelectTrigger className='whitespace-nowrap border-darkBlue md:w-[140px]'>
                    <SelectValue
                      placeholder={
                        <div className='flex items-center justify-center space-x-2'>
                          <img height={16} width={16} className='h-4 w-4' src={EnglandIcon} /> <p>{t('English')}</p>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className='border-darkBlue'>
                    <SelectGroup className='bg-lightWhite dark:bg-mediumBlue dark:text-gray-200'>
                      <SelectLabel>{t('Choose Language')}</SelectLabel>
                      {languageOptions.map((languageOption, index) => (
                        <SelectItem key={index} value={languageOption.value}>
                          <div className='flex items-center justify-center space-x-2'>
                            <img height={16} width={16} className='h-4 w-4' src={languageOption.icon} />
                            <p>{t(languageOption.label)}</p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <TopNavbarTooltipIcons />
              </>
            </ul>
            <TopNavbarPopoverUser currentUser={currentUser} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TopNavbar;
