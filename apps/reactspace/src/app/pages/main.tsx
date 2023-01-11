// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react';
import { Select, SelectItem } from '@fullstack/ui';
import { useCrawls } from '../hooks/useCrawls';

type Crawls = {
  name: string;
  _id: string;
};

type Resource = {
  title: string;
  _id: string;
};

export const Main = () => {
  const { data: appCrawls } = useCrawls();
  const [crawls, setCrawls] = useState<Crawls[]>([]);
  const [resource, setResource] = useState<Resource[] | null>(null);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    if (appCrawls) setCrawls(appCrawls);
  }, [appCrawls]);

  useEffect(() => {
    if (id) {
      fetch(`/api/resource/${id}`)
        .then((data) => data.json())
        .then(setResource);
    }
  }, [id]);

  return (
    <>
      <header className="flex">
        <h1>List of crawls!</h1>
      </header>
      <main>
        {crawls?.map((t) => {
          return (
            <div onClick={() => setId(t?._id)}>
              <Select
                title=""
                loading={!t.name}
                placeholder={t.name ?? ''}
                value={t.name ?? ''}
              >
                {resource ? (
                  resource.map((res) => (
                    <SelectItem key={res._id} motive="gray">
                      <span>{res.title}</span>
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem key={0} motive="gray">
                    <span>Loading</span>
                  </SelectItem>
                )}
              </Select>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Main;
