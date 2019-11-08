import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import test_img from '../images/test_image.PNG';
import PersonalContainer from '../containers/auth/PersonalContainer';

const Wrapper = styled.div`
    position: absolute;
    min-width: 1200px;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    font-family: 'NanumSquare', sans-serif;
`;

const Content_Wrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
 background-color: #faf0c8;
`;

const Header_Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 85px;
    border-bottom: solid 0.5px #2d2d2c;
`;

const Header = styled.div`
    position: relative;
    float: right;
    width: 400px;
    height: 85px;
    text-align: left;
`;

const Bottom_Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
`;

const White_Wrapper = styled.div`
    width: 235px;
    margin: 5px;
    height: 300px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.26);
    display: inline-block;
    box-sizing: border-box;
    padding: 10px;
`;

const Image_Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    background-color: #e9ecef;
    border-radius: 12px;
`;

const MainPage = ({history}) => {
    const Go_Write= ()=>{
        history.push('/write');
    }
	return(
        <Wrapper>
            <Content_Wrapper>
                <PersonalContainer />
                <Header_Wrapper>
                    <Header>
                        <h3>"당신이 사랑하는 사람들의 하루를 기록하는 공간입니다."</h3>
                        <h1>차차의 성장일기</h1>
                    </Header>
                    <button className="button_black" onClick={Go_Write}>
                        일기쓰기</button>
                </Header_Wrapper>
                <Bottom_Wrapper>
                    <White_Wrapper>
                        <Image_Wrapper>
                            <img className="main_image" src="http://item.ssgcdn.com/16/88/15/item/1000021158816_i1_202.jpg"                                               alt="image_test"></img>
                        </Image_Wrapper>
                            <div className="main_title">#1 따뜻한 어느 날 오후</div>
                            <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내 </div>
                    </White_Wrapper>
                    <White_Wrapper>
                         <Image_Wrapper></Image_Wrapper>
                            <div className="main_title">#1 따뜻한 어느 날 오후</div>
                            <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 </div>
                    </White_Wrapper>
                    <White_Wrapper>
                         <Image_Wrapper></Image_Wrapper>
                            <div className="main_title">#1 따뜻한 어느 날 오후</div>
                            <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 </div>
                    </White_Wrapper>
                    <White_Wrapper>
                         <Image_Wrapper></Image_Wrapper>
                         <div className="main_title">#1 따뜻한 어느 날 오후</div>
                            <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내 </div>
                    </White_Wrapper>
                     <White_Wrapper>
                          <Image_Wrapper></Image_Wrapper>
                          <div className="main_title">#1 따뜻한 어느 날 오후</div>
                            <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내 </div>
                    </White_Wrapper>
                     <White_Wrapper>
                          <Image_Wrapper></Image_Wrapper>
                          <div className="main_title">#1 따뜻한 어느 날 오후</div>
                            <div className="main_content">날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내년 총선과 관계된 모든 전술·전략 준비에 시동을 건 셈이다 날이 좋은 오늘 우리는 피크닉을 갔다.총선기획단은 내년 총선 캐치프레이즈부터 총선 전략과 공천 방향을 포함해 보수통합 논의까지 숙성시킨뒤 공천관리위원회에 전달할 방침이다. 내 </div>
                    </White_Wrapper>
                    
                </Bottom_Wrapper>
            </Content_Wrapper>
        </Wrapper>
	);
};

export default MainPage;