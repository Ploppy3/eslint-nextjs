import { create } from 'react-test-renderer';
import Seo from '../Seo';

// jest.mock(
//   "next/head",
//   () =>
//     function Head({ children }) {
//       return children;
//     },
// );

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return children;
    },
  };
});

describe("the component", () => {
  it('should display seo', () => {
    const render = create(
      <Seo />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});