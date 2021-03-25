import React, { useState } from 'react';

const Descript = () => {
  return (
      <>
        <h1>Rules</h1>
          <div>
            1. 프로그램 시작 후 중간에 참여 불가 <br />
            2. 문제 보기는 3개<br />
            3. 문제당 제한 시간은 1분<br />
            4. 게스트들은 "벗님들 찬스" and "한벗님 찬스"를 사용할 수 있음<br />
            5. 게스트가 떨어져도 계속 진행 최후의 5인이 남을 때까지 진행<br/>
            6. 생존자가 5인보다 많이 남은 상황(게스트 미포함)에서 모두가 떨어지면 모두 떨어진 라운드의 사람들만 부활 & 진행<br />
            7. 생존자가 5인 이하만 남으면 바로 종료<br />
          </div>
      </> 
  );
}

export default Descript;