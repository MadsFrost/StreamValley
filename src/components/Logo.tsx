import React from 'react';
interface LogoProps {
  width?: number;
  height?: number;
}
const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        maxHeight: "none",
        transition: "none 0s ease 0s",
      }}
      width={width}
      height={height}
      viewBox="0 0 840 840"
    >
      <path
      fill='white'
        d="M633 820c-86-52-92-144-14-232 42-48 71-114 71-163s-29-115-71-163c-64-73-72-143-22-202 65-78 189-57 229 38 21 51 11 91-37 149-63 76-82 124-77 193 3 43 11 68 32 97 15 21 43 60 61 87 40 56 43 81 15 137-38 73-121 100-187 59zM88 794c-31-16-58-61-58-96 0-38 35-85 74-98 74-24 146 27 146 102 0 32-7 47-34 74-38 38-81 44-128 18zm-8-531c-93-49-95-182-2-236 116-68 252 67 182 180-39 65-117 89-180 56z"
        style={{
          transform: "none",
        }}
      />
    </svg>
  )

export default Logo;