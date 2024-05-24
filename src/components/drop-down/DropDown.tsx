import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import React, {FC} from "react";
import i18n from "i18next";

interface SwitchLanguageProps {
  children: React.ReactNode
}

const SwitchLanguage: FC<SwitchLanguageProps> = ({children}) => {
  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("zh-CN")}>zh-CN</DropdownMenuItem>
        <DropdownMenuSeparator/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SwitchLanguage
