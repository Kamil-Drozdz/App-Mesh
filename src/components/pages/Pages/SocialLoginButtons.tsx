import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiOutlineGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/../firebaseConfig';
import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import { IconSize } from '@/lib/enums/iconSize';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';

const icons = [
  { icon: <AiFillGoogleSquare className='' size={IconSize.medium} />, tooltip: 'Google' },
  { icon: <AiFillFacebook className='text-[#3b5998]' size={IconSize.medium} />, tooltip: 'Facebook' },
  { icon: <AiFillTwitterSquare className='text-[#55acee]' size={IconSize.medium} />, tooltip: 'Twitter' },
  { icon: <AiOutlineGithub className='text-[#fffff]' size={IconSize.medium} />, tooltip: 'Github' },
];
function SocialLoginButtons({ setFormData }) {
  const navigate = useNavigate();
  const handleProviderLogin = async (provider: string) => {
    try {
      let authProvider;

      switch (provider) {
        case 'google':
          authProvider = new GoogleAuthProvider();
          break;
        case 'github':
          authProvider = new GithubAuthProvider();
          break;
        case 'twitter':
          authProvider = new TwitterAuthProvider();
          break;
        case 'facebook':
          authProvider = new FacebookAuthProvider();
          break;
        default:
          break;
      }
      if (authProvider) {
        await signInWithPopup(auth, authProvider);
        navigate(`${BasicRoutes.DASHBOARD}${SubRoutes.ECOMMERCE}`);
        setFormData({ email: '', password: '', persist: false });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='flex w-full items-center justify-center'>
        <Separator className='!shrink' />
        <p className='mx-4 text-gray-600'>or</p>
        <Separator className='!shrink' />
      </div>
      <div className='flex w-full items-center justify-center'>
        <TooltipProvider>
          {icons.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  aria-label={item.tooltip}
                  variant='empty'
                  className={`${
                    index !== icons.length - 1 ? 'border-r' : 'border-none'
                  } h-fit !rounded-none border-gray-600 px-3 !py-0`}
                  onClick={() => handleProviderLogin(item.tooltip.toLowerCase())}
                >
                  {item.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent className='bg-secondary p-2 text-primary' sideOffset={12} side='bottom'>
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </>
  );
}

export default SocialLoginButtons;
