// BRIcon.jsx
export const BRIcon = ({ bionic, ...props }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text x="9" y="16" fontSize="14" fontWeight={bionic ? 'bold' : 'normal'} fill="currentColor">B</text>
      <text x="15" y="16" fontSize="14" fontWeight={bionic ? 'normal' : 'bold'} fill="currentColor">R</text>
    </svg>
  );
  