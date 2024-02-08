import { TFunction } from 'i18next';

interface TopNavbarLanguagePlaceholderProps {
  t: TFunction;
  i18n: {
    language: string;
  };
  languageOptions: {
    icon: string;
    label: string;
    value: string;
  }[];
}
const TopNavbarLanguagePlaceholder = ({ t, i18n, languageOptions }: TopNavbarLanguagePlaceholderProps) => {
  return languageOptions
    .filter((languageOption) => languageOption.value === i18n.language)
    .map((languageOption) => (
      <div className='flex items-center justify-center space-x-2'>
        <img
          height={16}
          width={16}
          className='h-4 w-4'
          src={languageOption.icon}
          alt={`Flag of ${languageOption.label}`}
        />
        <p>{t(languageOption.label)}</p>
      </div>
    ));
};

export default TopNavbarLanguagePlaceholder;
