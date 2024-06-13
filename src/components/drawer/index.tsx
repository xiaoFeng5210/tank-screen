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
import {Switch} from "~/components/ui/switch"
import {Label} from "~/components/ui/label"
import {Input} from "~/components/ui/input"
import {fetchControlRobot} from "~/api";
import toast, {Toaster} from 'react-hot-toast';
import useDishConfigStore, {setDishConfig} from "~/store/dishConfig.ts";

const DrawerSetting = () => {
  const {t} = useTranslation("err")
  const {t: tHome} = useTranslation("home")
  const status = useSystemStore(state => state.status) as SystemStatus;
  const dishConfig = useDishConfigStore(state => state.dishConfig);
  const getDishConfig = useDishConfigStore(state => state.getDishConfig);
  const saveDishConfig = useDishConfigStore(state => state.saveDishConfig);
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

  const fetchControlCMD = async (cmd: string, tip: string) => {
    toast.loading(tHome(tip))
    try {
      await fetchControlRobot(cmd)
    } catch (e) {
      toast.error(tHome("error"))
      setTimeout(() => {
        toast.remove()
      }, 3000)
    }
  }

  /**
   * ! 机器人状态为5或者调度系统状态为0时，移除所有的toast
   */
  useEffect(() => {
    if (status.robot_status === 5 || status.scheduler_status === 0) {
      // toast.remove()
    }
  }, [status]);

  async function init() {
    await getDishConfig()
    await getMessagesConfig();
  }

  // @ts-ignore
  useEffect(() => {
    init()
  }, []);

  return (
    <DrawerContent className="h-[80%]">
      <DrawerHeader>
        <DrawerTitle>{t("title")}</DrawerTitle>
        <div className="flex">
          <div className="flex items-center space-x-2 mr-5">
            <Label htmlFor="airplane-mode">{tHome("buttonStartRobot")}</Label>
            <Switch id="airplane-mode" checked={status.robot_status !== 1 && status.robot_status !== 3}
                    onCheckedChange={
                      async value => {
                        value ? await fetchControlCMD("start_robot", "startRobot") : await fetchControlCMD("stop_robot", "stopRobot")
                      }}/>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode">{tHome("buttonStartScheduler")}</Label>
            <Switch id="airplane-mode" checked={status.scheduler_status === 1} onCheckedChange={
              async value => {
                value ? await fetchControlCMD("start_scheduler", "startScheduler") : await fetchControlCMD("stop_scheduler", "stopScheduler")
              }
            }/>
          </div>
        </div>

      </DrawerHeader>
      {/*  加汤设置*/}
      <div className="flex items-center space-x-2 pl-5">
        <Label htmlFor="airplane-mode">{tHome("addSoup")}</Label>
        {
          dishConfig?.soup.map(((item, index) => {
            return (
              <Input key={index} className="w-[5rem]" value={item.time} id="airplane-mode"
                     onChange={e => {
                       const dishConfigCopy = JSON.parse(JSON.stringify(dishConfig))
                       dishConfigCopy.soup[index].time = e.target.value
                       setDishConfig(dishConfigCopy)
                     }}/>
            )
          }))
        }
        <Button onClick={async () => {
          await saveDishConfig()
          toast.success(tHome("saveSuccess"))
        }}>save</Button>

      </div>
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
          <Button className="w-[50%] ml-[50%] translate-x-[-50%]">{tHome("close")}</Button>
        </DrawerClose>
      </DrawerFooter>
      <Toaster/>
    </DrawerContent>
  )
}

export default DrawerSetting
