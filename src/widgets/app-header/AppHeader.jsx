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
      <div className="site-header-inner">
        <a className="site-header-brand" href="/" aria-label="세니마켓 홈">
          <span className="site-header-logo">
            <img src="/참고/header/logo.png" alt="ITCEN" />
          </span>
          <span className="site-header-title">세니마켓</span>
        </a>

        <form className="site-header-search" role="search">
          <label className="sr-only" htmlFor="site-search">
            상품 검색
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="상품명, 키워드로 검색해보세요"
            aria-label="상품명, 키워드 검색"
          />
          <button type="submit" aria-label="검색">
            <i className="bi bi-search" aria-hidden="true" />
          </button>
        </form>

        <nav className="site-header-actions" aria-label="회원 메뉴">
          {NAV_ACTIONS.map((action) => (
            <a className={action.className} href="/" key={action.label}>
              <i className={`bi ${action.icon}`} aria-hidden="true" />
              <span>{action.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
