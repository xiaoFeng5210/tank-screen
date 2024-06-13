import {create} from 'zustand'

interface State {
  lang: string

}

interface Action {
  changeLang: (lang: string) => void
}

const useLangStore = create<State & Action>((set) => ({
  lang: "ko-KR",

  changeLang: (lang: string) => {
    set({lang})
  }
}))

export default useLangStore

