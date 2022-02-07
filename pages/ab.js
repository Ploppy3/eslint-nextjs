import NextLink from "next/link";
import { Fragment } from "react";

function Page() {
  return (
    <Fragment key="page">
      <div key="shared">
        shared
      </div>
      <NextLink
        href="/aa"
        passHref={true}>
        <a>
          aa
        </a>
      </NextLink>
    </Fragment>
  );
}

Page.getInitialProps = async function() {
  return {};
};

export default Page;
