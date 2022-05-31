// 기본 참조 객체
import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */
const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                {/* SEO 태그 */}
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:url" content={props.url} />
                {/* <meta property='og:image' content={props.image} /> */}

                {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
                <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet" />

                {/* Helmet 안에서 CSS 적용하기 */}
                {/* <style type="text/css">{``}</style> */}
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */
Meta.defaultProps = {
    title: "React Layout Demo",
    description: "React.js로 구현한 레이아웃 데모 페이지 입니다.",
    keywords: "React,layout,demo",
    author: "Jaei, Bona, Narae",
    // image: '기본이미지변수적용',
    url: window.location.href,
};

export default Meta;