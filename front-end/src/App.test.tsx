// import { describe, it } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';

// import { App, WrappedApp } from './App';

// describe('App', () => {
//   // key word for testing
//   it('Renders hello world', () => {
//     // ARRANGE (set up the test)
//     render(<WrappedApp />);
//     // ACT (do the things the user would do)
//     // EXPECT (check if everything is good)
//     expect(
//       screen.getByRole('heading', {
//         level: 1,
//       })
//     ).toHaveTextContent('Hello World');
//   });

//   it('Renders not found if invalid path', () => {
//     render(
//       <MemoryRouter initialEntries={['/somepage']}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(
//       screen.getByRole('heading', {
//         level: 1,
//       })
//     ).toHaveTextContent('Not Found');
//   });
// });
