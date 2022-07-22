import Header from './Header';

/* eslint-disable react/prop-types */
export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>i am the Page</h2>
      {children}
    </div>
  );
}
