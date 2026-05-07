import './HomeSub.scss';

const RECENT_SHARES = [
  '책상 의자 나눔합니다.',
  '반려식물 화분체 나눔해요',
  '전자레인지 나눔합니다',
  '도서 묶음 나눔합니다',
];

function HomeSub() {
  return (
    <section className="home-sub" data-node-id="425:2031">
      <div className="home-sub-inner content-container">
        <div className="home-sub-content">
          <a className="home-sub-banner home-sub-donation" href="/">
            <img
              className="home-sub-banner-image"
              src="/assets/images/sub-donation.png"
              alt=""
            />
            <strong className="home-sub-banner-title home-sub-donation-title">
              나눔은 마음을 이어줍니다
            </strong>
            <span className="home-sub-banner-desc home-sub-donation-desc">
              필요한 분께 따뜻한 나눔을 실천해보세요.
            </span>
            <span className="home-sub-banner-button home-sub-donation-button">
              나눔 게시판 바로가기 &gt;
            </span>
          </a>

          <a className="home-sub-banner home-sub-guide" href="/">
            <img
              className="home-sub-banner-image"
              src="/assets/images/sub-guide.png"
              alt=""
            />
            <strong className="home-sub-banner-title home-sub-guide-title">
              세니마켓 이용 가이드
            </strong>
            <span className="home-sub-banner-desc home-sub-guide-desc">
              <span className="home-sub-guide-desc-line">
                처음이신가요? 간단한 가이드를
              </span>
              <span className="home-sub-guide-desc-line">
                확인하고 안전하게 거래해요!
              </span>
            </span>
            <span className="home-sub-banner-button home-sub-guide-button">
              가이드 보기 &gt;
            </span>
          </a>

          <section className="home-sub-recent" aria-labelledby="recent-share-title">
            <div className="home-sub-recent-header">
              <h2 className="home-sub-recent-title" id="recent-share-title">
                최근 나눔 글
              </h2>
              <a className="home-sub-recent-more" href="/">
                더 보기 &gt;
              </a>
            </div>

            <div className="home-sub-recent-list">
              {RECENT_SHARES.map((share) => (
                <a className="home-sub-recent-item" href="/" key={share}>
                  <span className="home-sub-recent-left">
                    <span className="home-sub-recent-badge">나눔</span>
                    <span className="home-sub-recent-name">{share}</span>
                  </span>
                  <span className="home-sub-recent-time">2시간 전</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default HomeSub;
