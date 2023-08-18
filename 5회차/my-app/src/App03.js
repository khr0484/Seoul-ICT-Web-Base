import React, { useState, useCallback } from "react";

const Light = React.memo(({ room, on, toggle }) => {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "ON" : "OFF"}
    </button>
  );
})

const App = () => {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);


  // 컴포넌트가 리렌더링될 때, 하위 함수도 재정의되는 현상이 일어난다! 따라서 불필요한 재정의가 발생하기도 한다.
  // 때문에 useCallback으로 감싸준다.
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}

export default App