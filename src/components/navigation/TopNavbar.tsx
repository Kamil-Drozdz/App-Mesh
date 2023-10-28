import TopNavbarPopoverUser from './TopNavbarPopoverUser';
import TopNavbarTooltipIcons from './TopNavbarTooltipIcons';
import { Button } from '@/UI/Button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/UI/Select';
import EnglandIcon from '@/assets/united-kingdom-flag-icon.svg';
import { languageOptions, topNavbarIcons } from '@/data/navigation/topNavbarItems';
import useCurrentUser from '@/store/CurrentUser';
import useFullScreen from '@/store/FullScreen';
import useMenu from '@/store/Menu';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
            isFullScreen ? 'opacity-0 !absolute' : 'opacity-100'
          } print:hidden justify-between sticky top-8 z-[9] dark:bg-mediumBlue dark:text-gray-300 bg-white transition-all duration-300 ease text-gray-800 bg rounded-lg px-4 py-2 shadow-md dark:shadow-black shadow-lightGray`}
        >
          <ul className='flex items-center space-x-2'>
            {topNavbarIcons.icons.map((icon, index) => (
              <li className={`${index === 0 ? 'lg:hidden block' : 'md:block hidden'}`} key={index}>
                {index === 0 ? (
                  <Button className='!bg-transparent text-gray-800 dark:!text-gray-300' onClick={toggleMenu}>
                    {icon.icon}
                  </Button>
                ) : (
                  <a href={icon.href}>{icon.icon}</a>
                )}
              </li>
            ))}
          </ul>
          <div className='flex items-center space-x-6'>
            <ul className='flex items-center space-x-2'>
              <>
                <Select onValueChange={(e) => i18n.changeLanguage(String(e))}>
                  <SelectTrigger className='md:w-[140px] border-darkBlue whitespace-nowrap'>
                    <SelectValue
                      placeholder={
                        <div className='flex justify-center items-center space-x-2'>
                          <img height={16} width={16} className='w-4 h-4' src={EnglandIcon} /> <p>{t('English')}</p>
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className='border-darkBlue'>
                    <SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
                      <SelectLabel>{t('Choose Language')}</SelectLabel>
                      {languageOptions.map((languageOption, index) => (
                        <SelectItem key={index} value={languageOption.value}>
                          <div className='flex justify-center items-center space-x-2'>
                            <img height={16} width={16} className='w-4 h-4' src={languageOption.icon} />
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
