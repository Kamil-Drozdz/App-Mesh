const ChatZoomImage = ({ zoomImage, setZoomImage }) => {
  return (
    <div
      onClick={() => setZoomImage(null)}
      className='absolute inset-0 z-[50] flex items-center justify-center bg-black bg-opacity-70'
    >
      <img src={URL.createObjectURL(zoomImage)} className='md:w-1/2 max-w-[600px] px-6 aspect-square object-contain' />
    </div>
  );
};

export default ChatZoomImage;
