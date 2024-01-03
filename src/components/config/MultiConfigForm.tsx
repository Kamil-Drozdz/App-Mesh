import { useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/UI/Dialog';
import { Button } from '@/UI/Button';
import InputWithLabel from '@/common/InputWithLabel';
import { validateField } from '@/lib/validateField';
import { step1Schema, step2Schema } from '@/schema/configSchema';
import { Input } from '@/UI/Input';

import useConfig from '@/store/Config';
import { sendDataToBackend } from '@/lib/sendDataToBackend';
import useFirebaseData from '@/hooks/useFirebaseData';
import useCurrentUser from '@/store/CurrentUser';
import { updateDocumentFirebase } from '@/lib/firebaseHelpers/updateDocumentFirebase';

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

export const collectionName = 'config';
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

const MultiConfigForm = () => {
  const { currentUser } = useCurrentUser();
  const { config, setConfig } = useConfig();
  const { data, loading } = useFirebaseData<FormDataBasic>('config');
  docId = currentUser?.uid || '';
  const [formData, setFormData] = useState<FormDataProps>(initialFormData);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [ownApi, setOwnApi] = useState(false);
  console.log(formData);
  useEffect(() => {
    if (data) setConfig(data);
    if (!loading) setIsOpen(!config);
  }, [data]);

  const steps = ownApi
    ? [
        [
          { label: 'NAME APP', id: 'nameApp', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'URL TO LOGO APP', id: 'logoApp', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'STRIPE KEY', id: 'stripeKey', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'API URL', id: 'apiUrl', type: 'text', className: 'my-2', bgColor: 'bg-background' },
        ],
      ]
    : [
        [
          { label: 'NAME APP', id: 'nameApp', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'URL TO LOGO APP', id: 'logoApp', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'STRIPE KEY', id: 'stripeKey', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'API URL', id: 'apiUrl', type: 'text', className: 'my-2', bgColor: 'bg-background' },
        ],
        [
          { label: 'Email', id: 'email', type: 'email', className: 'my-2', bgColor: 'bg-background' },
          { label: 'Password', id: 'password', type: 'password', className: 'my-2', bgColor: 'bg-background' },
          { label: 'Port', id: 'port', type: 'number', className: 'my-2', bgColor: 'bg-background' },
          { label: 'Service', id: 'service', type: 'text', className: 'my-2', bgColor: 'bg-background' },
          { label: 'Host', id: 'host', type: 'text', className: 'my-2', bgColor: 'bg-background' },
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
            await updateDocumentFirebase(collectionName, docId, configData);
          } else {
            await sendDataToBackend(sensitiveData, currentUser?.uid,'config')
              .then(async () => {
                setIsOpen(false);
                setFormData(initialFormData);

                await updateDocumentFirebase(collectionName, docId, configData);
              })
              .catch((error) => {
                console.error('Error in sending data or adding document to Firebase:', error);
              });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='min-h-1/2 sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Configuration for your profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click submit when you're done.</DialogDescription>
        </DialogHeader>
        <div className='h-fit text-foreground '>
          {steps[step].map((step) => (
            <div>
              {step.id === 'apiUrl' && (
                <div className='flex items-center justify-start  space-x-2'>
                  <Input checked={ownApi} onChange={(e) => setOwnApi(e.target.checked)} type='checkbox' id='checkbox' />
                  <label htmlFor='checkbox'>use my own API </label>
                </div>
              )}
              {(ownApi || step.id !== 'apiUrl') && (
                <>
                  <InputWithLabel
                    onChange={(e) => {
                      const value = step.id === 'port' ? Number(e.target.value) || '' : e.target.value;
                      setFormData({ ...formData, [step.id]: value });
                    }}
                    value={formData[step.id]}
                    type={step.type}
                    id={step.id}
                    label={step.label}
                    className={step.className}
                    bgColor={step.bgColor}
                  />
                  <p className='text-sm text-red-500'>{errors[step.id]}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          {step > 0 && <Button onClick={() => setStep((prev) => prev - 1)}>Previous Step</Button>}
          <Button onClick={handleSubmit}>{step < steps.length - 1 ? 'Next step' : 'Submit'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MultiConfigForm;
