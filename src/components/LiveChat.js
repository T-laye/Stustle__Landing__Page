import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function App() {
  const tawkMessengerRef = useRef();

  return (
    <div className="App mt">
      <TawkMessengerReact
        propertyId="640f16a231ebfa0fe7f2456c"
        widgetId="1grdf0rhm"
        useRef={tawkMessengerRef}
      />
    </div>
  );
}
