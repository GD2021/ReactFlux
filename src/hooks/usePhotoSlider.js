import { createSetter } from "@/utils/nanostores";
import { useStore } from "@nanostores/react";
import { map } from "nanostores";

const state = map({ isPhotoSliderVisible: false, selectedIndex: 0 });

const setIsPhotoSliderVisible = createSetter(state, "isPhotoSliderVisible");
const setSelectedIndex = createSetter(state, "selectedIndex");

export const usePhotoSlider = () => {
  const { isPhotoSliderVisible, selectedIndex } = useStore(state);

  return {
    isPhotoSliderVisible,
    setIsPhotoSliderVisible,
    selectedIndex,
    setSelectedIndex,
  };
};
