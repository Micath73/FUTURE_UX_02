import { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import Onboarding from './components/Onboarding';
import ServiceSelection from './components/ServiceSelection';
import DateTimePicker from './components/DateTimePicker';
import Confirmation from './components/Confirmation';

interface Specialist {
  id: number;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

interface BookingState {
  screen: number;
  specialist: Specialist | null;
  date: string;
  time: string;
  bookingId: string;
}

const initialState: BookingState = {
  screen: 1,
  specialist: null,
  date: '',
  time: '',
  bookingId: '',
};

function App() {
  const [state, setState] = useState<BookingState>(initialState);

  const goToScreen = (screen: number) => setState(s => ({ ...s, screen }));

  const selectSpecialist = (specialist: Specialist) => {
    setState(s => ({ ...s, specialist, screen: 3 }));
  };

  const confirmAppointment = (date: string, time: string, bookingId: string) => {
    setState(s => ({ ...s, date, time, bookingId, screen: 4 }));
  };

  const resetApp = () => setState(initialState);

  return (
    <PhoneFrame>
      {state.screen === 1 && <Onboarding onGetStarted={() => goToScreen(2)} />}
      {state.screen === 2 && <ServiceSelection onSelectSpecialist={selectSpecialist} />}
      {state.screen === 3 && state.specialist && (
        <DateTimePicker
          specialist={state.specialist}
          onBack={() => goToScreen(2)}
          onConfirm={confirmAppointment}
        />
      )}
      {state.screen === 4 && state.specialist && (
        <Confirmation
          specialistName={state.specialist.name}
          date={state.date}
          time={state.time}
          bookingId={state.bookingId}
          onDone={resetApp}
        />
      )}
    </PhoneFrame>
  );
}

export default App;
