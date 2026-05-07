import AppFeatures from '../../../widgets/app-features/AppFeatures.jsx';
import AppFooter from '../../../widgets/app-footer/AppFooter.jsx';
import AppHeader from '../../../widgets/app-header/AppHeader.jsx';
import AppNav from '../../../widgets/app-nav/AppNav.jsx';
import './FindPassword.scss';

const PASSWORD_FIND_STEPS = [
  { number: 1, label: '이메일 입력', active: true },
  { number: 2, label: '이메일 인증' },
  { number: 3, label: '비밀번호 재설정' },
  { number: 4, label: '완료' },
];

function StepItem({ step, isLast }) {
  return (
    <>
      <div className={`find-password-step${step.active ? ' find-password-step-active' : ''}`}>
        <span className="find-password-step-number">{step.number}</span>
        <span className="find-password-step-label">{step.label}</span>
      </div>
      {!isLast ? (
        <i className="find-password-step-arrow bi bi-chevron-right" aria-hidden="true" />
      ) : null}
    </>
  );
}

function FindPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="find-password-page">
      <AppHeader />
      <AppNav />

      <section className="find-password-shell content-container" data-node-id="446:2545">
        <div className="find-password-panel" data-node-id="446:2550">
          <header className="find-password-header" data-node-id="446:2632">
            <a className="find-password-back" href="/login" aria-label="로그인으로 돌아가기">
              <i className="bi bi-arrow-left" aria-hidden="true" />
            </a>
            <div className="find-password-title-box">
              <h1>비밀번호 찾기</h1>
              <p>가입하신 이메일 주소로 인증후 비밀번호를 재설정할 수 있습니다</p>
            </div>
          </header>

          <div className="find-password-steps" aria-label="비밀번호 찾기 단계" data-node-id="446:2591">
            {PASSWORD_FIND_STEPS.map((step, index) => (
              <StepItem
                key={step.number}
                step={step}
                isLast={index === PASSWORD_FIND_STEPS.length - 1}
              />
            ))}
          </div>

          <div className="find-password-content" data-node-id="446:2553">
            <form className="find-password-form-card" onSubmit={handleSubmit}>
              <div className="find-password-copy">
                <strong>이메일 주소 입력</strong>
                <p>가입 시 사용하신 이메일 주소를 입력해주세요.</p>
              </div>

              <label className="find-password-field" htmlFor="find-password-email">
                <i className="find-password-field-icon bi bi-envelope" aria-hidden="true" />
                <input
                  id="find-password-email"
                  name="email"
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                />
              </label>

              <button className="find-password-submit" type="submit">
                인증메일 보내기
              </button>
            </form>

            <aside className="find-password-guide-card" data-node-id="446:2556">
              <div className="find-password-guide-top">
                <span className="find-password-guide-icon">
                  <i className="bi bi-envelope-check" aria-hidden="true" />
                </span>
                <p>
                  이메일 인증을 통해
                  <span>비밀번호를 안전하게 찾을 수 있어요.</span>
                </p>
              </div>
              <ul className="find-password-guide-list">
                <li>입력하신 이메일로 인증메일이 발송됩니다.</li>
                <li>이메일 인증 후 새로운 비밀번호를 설정할 수 있습니다.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <AppFeatures />
      <AppFooter />
    </main>
  );
}

export default FindPassword;
