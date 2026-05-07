import AppFeatures from '../../widgets/app-features/AppFeatures.jsx';
import AppFooter from '../../widgets/app-footer/AppFooter.jsx';
import AppHeader from '../../widgets/app-header/AppHeader.jsx';
import AppNav from '../../widgets/app-nav/AppNav.jsx';
import AppPopular from '../../widgets/app-popular/AppPopular.jsx';
import AppSub from '../../widgets/app-sub/AppSub.jsx';
import AppVisual from '../../widgets/app-visual/AppVisual.jsx';

function Home() {
  return (
    <main>
      <AppHeader />
      <AppNav />
      <AppVisual />
      <AppPopular />
      <AppSub />
      <AppFeatures />
      <AppFooter />
    </main>
  );
}

export default Home;
