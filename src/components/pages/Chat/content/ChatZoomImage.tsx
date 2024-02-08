function ChatZoomImage({ zoomImage, setZoomImage }) {
  return (
    <div
      onClick={() => setZoomImage(null)}
      className='absolute inset-0 z-[50] flex items-center justify-center bg-black bg-opacity-70'
    >
      <img src={zoomImage} className='aspect-square max-w-[600px] object-contain px-6 md:w-1/2' />
    </div>
  );
}

export default ChatZoomImage;
