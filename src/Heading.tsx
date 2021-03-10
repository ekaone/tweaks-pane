import React from 'react';

type PropsText = {
  text: string;
};
const Head = ({ text }: PropsText) => <div>{text}</div>;

function Heading() {
  return (
    <div>
      <Head text={'Hello'} />
    </div>
  );
}

export default Heading;
