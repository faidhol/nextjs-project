'use client';

import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="max-w-2xl mx-auto p-6">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
