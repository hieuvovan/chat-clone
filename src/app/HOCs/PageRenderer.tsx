import React from 'react';

const Empty = () => <div>Empty</div>;

const Loading = () => <div>Loading ...</div>;

export const PageRenderer = (PageContent: any) => {
  return (props: any) => {
    const { data } = props;
    return (
      <>
        {!data && <Loading />}
        {!!data && !Object.keys(data).length && <Empty />}
        {data && !!Object.keys(data).length && <PageContent {...props} />}
      </>
    );
  };
};
