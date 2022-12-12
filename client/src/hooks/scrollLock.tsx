import React from "react";
import useWindowSize from "./windowSize.hook";

const useScrollLock = () => {
     const { size } = useWindowSize();
     const lockScroll = React.useCallback(() => {
          document.body.style.overflow = "hidden";
          if (size[0] > 768) document.body.style.paddingRight = "17px";
     }, [size]);

     const unlockScroll = React.useCallback(() => {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "0px";
     }, []);

     return {
          lockScroll,
          unlockScroll,
     };
};

export default useScrollLock;
