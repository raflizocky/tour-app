export const BBSvgPath = args => {
  const {step, position, canvasSize} = args;

  if (step?.name === 'Clock') {
    return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0Z
            M${position.x._value + 5},${position.y._value + 10}
            m-5,0
            a40,40 0 1,0 80,0 
            a40,0 0 1,0 -80,0`;
  }

  if (step?.name === 'Home') {
    return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0Z
                  M${position.x._value + 14},${position.y._value + 21}
                  m-5,10
                  a30,30 0 1,0 60,0
                  a30,30 0 1,0 -60,0`;
  }

  if (step?.name === 'Team' || 'Inbox') {
    return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0Z
                  M${position.x._value + 14},${position.y._value + 21}
                  m-3,10
                  a30,30 0 1,0 60,0
                  a30,30 0 1,0 -60,0`;
  }

  if (step?.name === 'Account') {
    return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0Z
                  M${position.x._value + 14},${position.y._value + 21}
                  m-5,5 
                  a30,30 0 1,0 60,0 
                  a30,30 0 1,0 -60,0`;
  }

  return null;
};
