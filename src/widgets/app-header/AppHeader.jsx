import './AppHeader.scss';

const NAV_ACTIONS = [
  {
    label: '로그인',
    icon: 'bi-person',
    className: 'site-header-button site-header-button-ghost',
  },
  {
    label: '회원가입',
    icon: 'bi-person-add',
    className: 'site-header-button site-header-button-primary',
  },
];

function AppHeader() {
  return (
    <header className="site-header" data-node-id="66:184">
      <div className="site-header-inner content-container">
        <a className="site-header-brand" href="/" aria-label="세니마켓 홈">
          <span className="site-header-logo">
            <img className="site-header-logo-image" src="/assets/images/logo.png" alt="ITCEN" />
          </span>
          <span className="site-header-title">세니마켓</span>
        </a>

        <form className="site-header-search" role="search">
          <label className="sr-only" htmlFor="site-search">
            상품 검색
          </label>
          <input
            className="site-header-search-input"
            id="site-search"
            type="search"
            placeholder="상품명, 키워드로 검색해보세요"
            aria-label="상품명, 키워드 검색"
          />
          <button className="site-header-search-button" type="submit" aria-label="검색">
            <i className="site-header-search-icon bi bi-search" aria-hidden="true" />
          </button>
        </form>

        <nav className="site-header-actions" aria-label="회원 메뉴">
          {NAV_ACTIONS.map((action) => (
            <a className={action.className} href="/" key={action.label}>
              <i className={`site-header-button-icon bi ${action.icon}`} aria-hidden="true" />
              <span className="site-header-button-label">{action.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
