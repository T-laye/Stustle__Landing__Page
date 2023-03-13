import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <div className="App mt">
      <button onClick={handleMinimize}> Minimize the Chat </button>

      <TawkMessengerReact
        propertyId="640f16a231ebfa0fe7f2456c"
        widgetId="1grdf0rhm"
        useRef={tawkMessengerRef}
      />
    </div>
  );
}
