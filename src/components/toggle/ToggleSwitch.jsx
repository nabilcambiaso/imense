import React from "react";

function ToggleSwitch({
  text,
  size = "default",
  checked,
  disabled,
  onChange,
  offstyle = "bg-ourDisabledGray",
  onstyle = "bg-[#DAFFDF]"
}) {
  let displayStyle = checked ? onstyle : offstyle;
  return (
    <>
      <label>
        <span className={`${size} switch-wrapper`}>
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={e => onChange(e)}
          />
          <span className={`${displayStyle} switch`}>
            <span className="switch-handle" />
          </span>
        </span>
      </label>
    </>
  );
}

export default ToggleSwitch;
