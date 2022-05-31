import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/** 로딩바 컴포넌트 */
// --> https://mhnpd.github.io/react-loader-spinner/
import { Oval } from 'react-loader-spinner';

/** 로딩바 뒤에 표시될 검은색 반투명 창 */
const TransLayer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    background-color: #0003;
    width: 100%;
    height: 100%;
`;

const Spinner = ({ visible, color, secondaryColor , width, height }) => {
    return (
        <div>
            { visible && (
                <TransLayer>
                    <Oval
                        ariaLabel="loading-indicator"
                        color={color}
                        secondaryColor={secondaryColor}
                        width={width}
                        height={height}
                        strokeWidth={3}
                        // 개발자정의 CSS 추가
                        wrapperStyle={{
                            position: 'absolute',
                            zIndex: 10000,
                            left: '50%',
                            top: '50%',
                            marginLeft: (-width/2),
                            marginTop: (-height/2)
                        }}
                    />
                </TransLayer>
            )}
        </div>
    );
};

/** 기본값 정의 */
Spinner.defaultProps = {
    visible: false,
    color: 'white',
    secondaryColor: 'grey',
    width: 100,
    height: 100
};

/** 데이터 타입 설정 */
Spinner.propTypes = {
    visible: PropTypes.bool.isRequired,
    color: PropTypes.string,
    secondaryColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default React.memo(Spinner);