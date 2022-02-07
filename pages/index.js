import { Fragment } from "react";

function Page() {
  const test = 3;

  const obj = {
    a: 1, b: { c: 3, d: 4 }, e: 3,
  };

  const arrA = [1, 2, [3, 4]];

  const arrB = [
    1,
    2,
    [
      4,
      5,
      6,
      [
        [1, 2, []],
      ],
    ],
  ];

  function myFunction() {
    if (true) {

    } else {
    }
  }

  return (
    <>
      <div
        test="3"
        p={{ a: 1, b: '2' }}
        black={true}>
        <span>
          {"Home"}
          testest
        </span>
        <span />
      </div>

      <div>
        <input />
      </div>

      <div>
        {[0, 1, 3].map?.((item, index) => (
          <Fragment key={index}>
            keyed fragment enforced
          </Fragment>
        ))}
        test
        {true && (
          <>
            it works
          </>
        )}
      </div>
    </>
  );
}

Page.propTypes = {};

export default Page;
