import * as React from "react";
import { ArrowUpIcon } from "../icons";
import { AnimatePresence, useViewportScroll } from "framer-motion";
import Link from "next/link";

const BackToTop = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) =>
      setShow(progress > 0)
    );

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed bottom-4 right-4 flex justify-center items-center">
          <Link href="/#first-section">
            <a>
              <ArrowUpIcon className="w-6 h-6 animate-bounce" />
            </a>
          </Link>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
