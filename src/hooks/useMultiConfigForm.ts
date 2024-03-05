import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { validateField } from '@/lib/validateField';
import { step1Schema, step2Schema } from '@/schema/configSchema';
import useConfig from '@/store/Config';
import { sendDataToBackend } from '@/lib/sendDataToBackend';
import useCurrentUser from '@/store/CurrentUser';
import { updateDocumentFirebase } from '@/lib/firebaseHelpers/updateDocumentFirebase';
import useFirebaseCachedData from '@/hooks/reusable/useFirebaseCachedData';
import { Collections } from '@/lib/enums/collections';

export interface FormDataBasic {
  nameApp: string;
  logoApp: string;
  apiUrl: string;
}
interface FormDataProps extends FormDataBasic {
  stripeKey: string;
  email: string;
  password: string;
  port: number;
  service: string;
  host: string;
}

export let docId;
const initialFormData = {
  nameApp: '',
  logoApp: '',
  apiUrl: '',
  stripeKey: '',
  email: '',
  password: '',
  port: 0,
  service: '',
  host: '',
};

function useMultiConfigForm() {
  const { currentUser } = useCurrentUser();
  const { config, setConfig } = useConfig();
  const { data, loading } = useFirebaseCachedData<FormDataBasic>('config');
  docId = currentUser?.uid || '';
  const [formData, setFormData] = useState<FormDataProps>(initialFormData);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [ownApi, setOwnApi] = useState(false);

  useEffect(() => {
    if (data) setConfig(data);
    if (!loading) setIsOpen(!config);
  }, [data]);

  const steps = ownApi
    ? [
        [
          {
            label: 'NAME APP',
            id: 'nameApp',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'URL TO LOGO APP',
            id: 'logoApp',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'STRIPE KEY',
            id: 'stripeKey',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'API URL',
            id: 'apiUrl',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
        ],
      ]
    : [
        [
          {
            label: 'NAME APP',
            id: 'nameApp',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'URL TO LOGO APP',
            id: 'logoApp',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'STRIPE KEY',
            id: 'stripeKey',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'API URL',
            id: 'apiUrl',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
        ],
        [
          {
            label: 'Email',
            id: 'email',
            type: 'email',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'Password',
            id: 'password',
            type: 'password',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'Port',
            id: 'port',
            type: 'number',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'Service',
            id: 'service',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
          {
            label: 'Host',
            id: 'host',
            type: 'text',
            className: 'my-2',
            bgColor: 'bg-background',
          },
        ],
      ];

  const handleSubmit = async () => {
    try {
      let isCurrentStepValid = false;

      if (step === 0) {
        isCurrentStepValid = validateField(step1Schema, formData, setErrors);
      } else if (step === 1) {
        isCurrentStepValid = validateField(step2Schema, formData, setErrors);
      }

      if (isCurrentStepValid) {
        if (step < steps.length - 1) {
          setStep((prev) => prev + 1);
        } else {
          const configData = {
            nameApp: formData.nameApp,
            logoApp: formData.logoApp,
            apiUrl: formData.apiUrl,
          };

          const sensitiveData = {
            stripeKey: formData.stripeKey,
            email: formData.email,
            password: formData.password,
            port: formData.port,
            service: formData.service,
            host: formData.host,
          };

          if (ownApi) {
            await updateDocumentFirebase(Collections.config, docId, configData).then(() => 'Your setting is saved');
          } else {
            await sendDataToBackend(sensitiveData, currentUser?.uid, 'config')
              .then(async () => {
                setIsOpen(false);
                setFormData(initialFormData);
                await updateDocumentFirebase(Collections.config, docId, configData).then(() => 'Your setting is saved');
              })
              .catch((error) => {
                toast.error('Error in sending data or adding document to Firebase:', error);
              });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {
    formData,
    errors,
    setFormData,
    handleSubmit,
    steps,
    step,
    setStep,
    isOpen,
    setIsOpen,
    ownApi,
    setOwnApi,
  };
}

export default useMultiConfigForm;
