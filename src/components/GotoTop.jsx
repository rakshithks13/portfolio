import { Fragment, useState } from "react";
import { TiArrowUp } from "react-icons/ti";

export default function GotoTop() {
  const [show, setShow] = useState(false);
  function gotoPageTop() {
    window.scrollTo({ top: 10, behavior: "smooth" });
    return;
  }

  const showTooltip = () => setShow(!show);
  return (
    <Fragment>
      <div className="fixed z-10 bottom-10 right-10">
        <div
          className="bg-gray-400/70 rounded-full shadow-xl p-2 cursor-pointer"
          onClick={gotoPageTop}
          onMouseEnter={showTooltip}
          onMouseLeave={showTooltip}
        >
          <TiArrowUp size="1.5rem" />
        </div>
        {show ? (
          <div className="absolute top-11 text-sm w-max text-white">
            Go to top
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}
