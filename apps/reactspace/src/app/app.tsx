// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react';
import { Select, SelectItem } from '@fullstack/ui';

import styles from './app.module.scss';

type Crawls = {
  name: string;
  // id: number;
};

export const App = () => {
  const [crawls, setCrawls] = useState<Crawls[]>([]);

  useEffect(() => {
    fetch('/api/crawls')
      .then((t) => t.json())
      .then(setCrawls);
  }, []);

  return (
    <>
      <header className="flex">
        <h1>List of crawls!</h1>
      </header>
      <main>
        {crawls.map((t) => (
          <Select
            title=""
            loading={!t.name}
            placeholder={t.name ?? ''}
            value={t.name ?? ''}
          >
            <SelectItem key={0} motive="gray">
              <span>First option is to big to fit screen</span>
            </SelectItem>
            <SelectItem key={1} motive="gray">
              <span>Second option is to big to fit screen</span>
            </SelectItem>
          </Select>
        ))}
      </main>
    </>
  );
};

export default App;
