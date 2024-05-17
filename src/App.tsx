import Section2 from "~/components/section2/section2.tsx";
import Section1 from "~/components/section1/section1.tsx";
import Section3 from "~/components/section3/section3.tsx";
import Section4 from "~/components/section4/Section4.tsx";
import { useTranslation } from "react-i18next";
import './App.css'

function App() {
  const { t } = useTranslation('home');
  return (
    <div className="box-border w-screen h-screen flex flex-col">
      <header>
        <img src="/img/dip-logo.png" alt="" />
        <span className="ml-10 text-white">{t('company')}</span>
        <img className='ml-auto' src="/img/i18n.svg" alt="" />
      </header>
      <main className="layout flex-1 p-2 bg-gray-200">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </div>
  )
}

export default App

