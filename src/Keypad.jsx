import React from 'react'; // jsx 


// inner component
const Button = ({ height = '50px', width = "50px", txt, bgColor, handleTxt }) => {

  const handleBtnClick = (e) => {
    console.log(e.target);
    handleTxt(txt);
  }

  return (
    <button
      // inline styling
      style={{
        height,
        width,
        backgroundColor: bgColor,
        margin: '6px'
      }}
      onClick={handleBtnClick}
    // below wrong ways of using event with e/event parameter
    // onClick={() => handleBtnClick()}
    // onClick={handleBtnClick()}
    // onClick={() => {
    //   handleBtnClick();
    // }}
    >
      {txt}
    </button>
  )
};

// array of button objects
const buttons = [
  { width: '112px', txt: 'AC', bgColor: 'red' },
  { txt: '/', bgColor: 'rgb(179, 68, 109)' },
  { txt: 'x', bgColor: 'rgb(179, 68, 109)' },
  { txt: '7' },
  { txt: '8' },
  { txt: '9' },
  { txt: '-', bgColor: 'rgb(179, 68, 109)' },
  { txt: '4' },
  { txt: '5' },
  { txt: '6' },
  { txt: '+', bgColor: 'rgb(179, 68, 109)' },
  { txt: '1' },
  { txt: '2' },
  { txt: '3' },
  { txt: '%', bgColor: 'rgb(179, 68, 109)' },
  { txt: '0', width: '112px' },
  { txt: '.' },
  { txt: '=', bgColor: 'rgb(245, 207, 20)' },
];


// stateless component / pure component
const Keypad = ({
  handleTxt
}) => {
  return (
    <div
      style={{
        width: '248px',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >

      {/* Row One */}
      {/* <Button width={'112px'} txt='AC' bgColor={'red'} />
      <Button txt={'/'} bgColor={'rgb(179, 68, 109)'} />
      <Button txt={'x'} bgColor={'rgb(179, 68, 109)'} /> */}
      {/* Row Two */}
      {/* <Button txt='7' />
      <Button txt={'8'} />
      <Button txt={'9'} />
      <Button txt='-' bgColor={'rgb(179, 68, 109)'} /> */}
      {/* Row Three */}
      {/* <Button txt='4' />
      <Button txt={'5'} />
      <Button txt={'6'} />
      <Button txt='+' bgColor={'rgb(179, 68, 109)'} /> */}
      {/* Row Four */}
      {/* <Button txt='1' />
      <Button txt={'2'} />
      <Button txt={'3'} />
      <Button txt='%' bgColor={'rgb(179, 68, 109)'} /> */}
      {/* Row Five */}
      {/* <Button width={'112px'} txt='0' />
      <Button txt={'.'} />
      <Button txt='=' bgColor={'rgb(245, 207, 20)'} /> */}


      {/* Row 1, 2, 3, 4, 5 using map */}
      {/* object destructure */}
      {buttons.map(({ txt, width, bgColor }, index) => (
        <Button key={txt} txt={txt} width={width} handleTxt={handleTxt} bgColor={bgColor} />
      ))}
      {/* object spreading - only possible when the key names are same component props */}
      {/* {buttons.map((btnObj) => (
        <Button {...btnObj} />
      ))} */}
    </div>
  )
};

export default Keypad;