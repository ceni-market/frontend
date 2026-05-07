import './AppVisual.scss';

const QUICK_ITEMS = [
  { label: '전체보기', icon: 'bi-grid', href: '/' },
  { label: '나눔게시판', icon: 'bi-heart', href: '/' },
  { label: '인기매물', icon: 'bi-fire', href: '/' },
  { label: '최근 등록', icon: 'bi-clock', href: '/' },
  { label: '거래 가이드', icon: 'bi-book', href: '/' },
  { label: '이용 안내', icon: 'bi-info-circle', href: '/' },
];

function AppVisual() {
  return (
    <section className="app-visual" data-node-id="425:2164">
      <div className="app-visual-inner">
        <a className="app-visual-banner" href="/" aria-label="세니마켓 안내 배너">
          <img className="app-visual-banner-image" src="/assets/images/visual-banner.png" alt="" />
        </a>

        <nav className="app-visual-quick" aria-label="빠른 메뉴">
          {QUICK_ITEMS.map((item) => (
            <a className="app-visual-quick-item" href={item.href} key={item.label}>
              <i className={`app-visual-quick-icon bi ${item.icon}`} aria-hidden="true" />
              <span className="app-visual-quick-label">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default AppVisual;
