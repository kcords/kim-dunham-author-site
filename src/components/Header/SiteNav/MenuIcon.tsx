import classes from "./SiteNav.module.css";
import { useRef } from "react";
import { useUpdateMenuRefOnNav } from "@/hooks/useUpdateMenuRefOnNav";

export const MenuIcon = () => {
  //used to uncheck checkbox state on navigation
  const menuCheckboxRef = useRef<HTMLInputElement>(null);
  useUpdateMenuRefOnNav(menuCheckboxRef);

  const toggleMenuCheckbox = () => {
    if (!menuCheckboxRef.current) return;
    menuCheckboxRef.current.checked = !menuCheckboxRef.current.checked;
  };

  const handleKeypress: React.KeyboardEventHandler = ({ key }) => {
    if (key !== "enter" && key !== " ") return;
    toggleMenuCheckbox();
  };

  const handleClick: React.MouseEventHandler = () => toggleMenuCheckbox();

  const renderLine = () => <div className={classes.line} />;

  return (
    <>
      <input
        type="checkbox"
        id="menu-toggle"
        className={classes.menuToggle}
        ref={menuCheckboxRef}
      />
      <div
        className={classes.menuIcon}
        tabIndex={0}
        aria-label={"Toggle menu drawer"}
        aria-controls="menu-toggle"
        role="button"
        onKeyDown={handleKeypress}
        onClick={handleClick}
      >
        {renderLine()}
        {renderLine()}
        {renderLine()}
      </div>
    </>
  );
};
