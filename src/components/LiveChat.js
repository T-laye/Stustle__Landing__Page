import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function App() {
  const tawkMessengerRef = useRef();

  return (
    <div className="App mt">
      <TawkMessengerReact
        propertyId="64105e254247f20fefe5cfca"
        widgetId="1grfuvib9"
        useRef={tawkMessengerRef}
      />
    </div>
  );
}
