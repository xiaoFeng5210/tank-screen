import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import React, {FC} from "react";
import i18n from "i18next";
import useLangStore from "~/store/lang.ts";

interface SwitchLanguageProps {
  children: React.ReactNode
}

const SwitchLanguage: FC<SwitchLanguageProps> = ({children}) => {
  const changeLangStore = useLangStore(state => state.changeLang)
  const changeLanguage = async (language: string) => {
    changeLangStore(language)
    await i18n.changeLanguage(language)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => changeLanguage("ko-KR")}>ko-KR</DropdownMenuItem>
        {/*<DropdownMenuItem onClick={() => changeLanguage("en")}>EN</DropdownMenuItem>*/}
        <DropdownMenuItem onClick={() => changeLanguage("zh-CN")}>zh-CN</DropdownMenuItem>
        <DropdownMenuSeparator/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SwitchLanguage
