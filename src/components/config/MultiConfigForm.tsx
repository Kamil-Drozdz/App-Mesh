import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/UI/Dialog';
import { Button } from '@/UI/Button';
import InputWithLabel from '@/common/InputWithLabel';
import useMultiConfigForm from '@/hooks/useMultiConfigForm';
import { Input } from '@/UI/Input';

function MultiConfigForm() {
  const {
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
  } = useMultiConfigForm();

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
}

export default MultiConfigForm;
