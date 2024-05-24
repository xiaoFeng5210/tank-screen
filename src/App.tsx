import Section2 from "~/components/section2/section2.tsx";
import Section1 from "~/components/section1/section1.tsx";
import Section3 from "~/components/section3/section3.tsx";
import Section4 from "~/components/section4/Section4.tsx";
import {useTranslation} from "react-i18next";
import {Drawer, DrawerTrigger,} from "~/components/ui/drawer"
import DrawerSetting from "~/components/drawer";

import './App.css'
import SwitchLanguage from "~/components/drop-down/DropDown.tsx";

function App() {
  const {t} = useTranslation('home');
  return (
    <Drawer>
      <div className="box-border w-screen h-screen flex flex-col overflow-hidden">
        <header className="w-full box-border inline-flex justify-between">
          <div className="inline-flex">
            <img src="/img/dip-logo.png" alt=""/>
            <span className="ml-10 text-white">{t('company')}</span>
          </div>
          <div className="inline-flex">
            <SwitchLanguage>
              <img src="/img/i18n.svg" alt=""/>
            </SwitchLanguage>
            <DrawerTrigger asChild>
              <img src="/img/setting.svg" className="ml-5" alt=""/>
            </DrawerTrigger>
          </div>
        </header>
        <main className="layout flex-1 bg-gray-200 overflow-hidden">
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
        </main>
        <DrawerSetting/>
      </div>
    </Drawer>
  )
}

export default App

