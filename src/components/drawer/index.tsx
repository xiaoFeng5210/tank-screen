import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "~/components/ui/drawer.tsx";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {useEffect, useMemo} from "react";
import {useSystemMessages} from "~/composables/useMessages.tsx";
import useSystemStore from "~/store/systemStatus.ts";
import {SystemStatus} from "~/types/common.ts";
import {Button} from "~/components/ui/button"

const DrawerSetting = () => {
  const {t} = useTranslation("err")
  const {t: tHome} = useTranslation("home")
  const status = useSystemStore(state => state.status) as SystemStatus;
  const {renderMessage, getMessagesConfig} = useSystemMessages();
  // @ts-ignore
  const warnings = useMemo<string[]>(() => {
    return status?.messages?.warning ?? []
  }, [status]);

  // @ts-ignore
  const errors = useMemo<string[]>(() => {
    return status?.messages?.error ?? []
  }, [status])

  const stoveErrors = useMemo(() => {
    return status.induction_cooker_status?.map(cooker => {
      return cooker.error ?? []
    })
  }, [status])

  useEffect(() => {
    getMessagesConfig();
  }, []);

  return (
    <DrawerContent className="h-[80%]">
      <DrawerHeader>
        <DrawerTitle>{t("title")}</DrawerTitle>
        {/*<DrawerDescription>This action cannot be undone.</DrawerDescription>*/}
      </DrawerHeader>
      <div className="flex flex-row h-full">
        <div className="w-full h-full box-border p-5 flex-1">
          {
            warnings.map((warning, index) => (
              <div key={index}
                   className="text-xl">{t("warning") + (index + 1)}：{renderMessage("warning", String(warning), i18n.language)}</div>
            ))
          }
          {
            errors.map((error, index) => (
              <div key={index}
                   className="text-xl">{t("error") + (index + 1)}：{renderMessage("warning", String(error), i18n.language)}</div>
            ))
          }
        </div>
        <div className="flex-1 p-5 w-full h-full box-border grid grid-cols-2 grid-rows-2">
          {
            stoveErrors.map(((errs, index1) => {
              return (
                <div className="text-xl" key={index1}>
                  {tHome("stove") + (index1 + 1)}: {
                  errs.map((err, index2) => {
                    return (
                      <div key={index2}>{renderMessage("error", String(err), i18n.language)}</div>
                    )
                  })
                }
                </div>
              )
            }))
          }
        </div>
      </div>

      <DrawerFooter>
        <DrawerClose asChild>
          <Button className="w-[50%] ml-[50%] translate-x-[-50%]">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  )
}

export default DrawerSetting
