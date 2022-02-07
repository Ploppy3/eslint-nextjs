import NextLink from "next/link";
import { Fragment } from "react";

function Page() {
  return (
    <Fragment key="page">
      <div key="shared">
        shared
      </div>
      <NextLink
        href="/ab"
        passHref={true}>
        <a>
          ab
        </a>
      </NextLink>
    </Fragment>
  );
}

Page.getInitialProps = async function() {
  return {};
};

export default Page;
