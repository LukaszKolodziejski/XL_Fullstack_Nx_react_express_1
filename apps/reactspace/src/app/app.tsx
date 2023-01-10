// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react';

import styles from './app.module.scss';

type Ticket = {
  title: string;
  id: number;
};

export const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetch('/api/tickets')
      .then((t) => t.json())
      .then(setTickets);
  }, []);

  return (
    <>
      <header className="flex">
        <h1>Welcome to tickets!</h1>
      </header>
      <main>
        {tickets.map((t) => (
          <p className="ticket flex" key={t.id}>
            {t.title}
          </p>
        ))}
      </main>
    </>
  );
};

export default App;
