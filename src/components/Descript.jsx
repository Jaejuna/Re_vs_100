import React from 'react';
import { dbService } from '../firebase';

const Descript = () => {

  const onClickToQuiz = async () => {
    await dbService.collection('current').doc('current').update({
      toQuiz: true
    });
  }

  return (
      <>
        <h1>Rules</h1>
          <div>
            1.3개의 보기 중 정답을 고른다. <br/>
            2.100인이 먼저 문제를 다 푼 후, 게스트 2인이 푼다. <br/>
            3.문제를 푸는 데는 1분의 시간제한이 있다. <br/>
            4.문제를 틀리면 탈락이며, 정답자만 다음 문제로 넘어간다.(중간 참여 불가능) <br/>
            5. 정답자가 8명(?) 이하로 남으면 프로그램이 종료한다. <br/>
            6. 게스트 2명은 함께 2번의 찬스를 쓸 수 있다.<br/><br/>
            한벗님 찬스 : 원하는 한 명의 답을 알 수 있다, 없을 시 호스트가 지정. <br/>
            벗님들 찬스 : 모든 벗님이 선택한 답을 알 수 있다.
          </div>
          <button
        onClick = {onClickToQuiz}
        >
          ToQuiz
        </button>
      </> 
  );
}

export default Descript;