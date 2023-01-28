import IconProps from "../shared";

const AccountFilledIcon = ({
  size = 24,
  color = "#16A34A",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.3"
        d="M18 6C11.37 6 6 11.37 6 18C6 20.925 7.05 23.595 8.79 25.68C11.4174 23.6186 14.6604 22.4982 18 22.4982C21.3396 22.4982 24.5826 23.6186 27.21 25.68C29.0146 23.528 30.0026 20.8085 30 18C30 11.37 24.63 6 18 6ZM18 19.5C15.105 19.5 12.75 17.145 12.75 14.25C12.75 11.355 15.105 9 18 9C20.895 9 23.25 11.355 23.25 14.25C23.25 17.145 20.895 19.5 18 19.5Z"
        fill={color}
      />
      <path
        d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C15.39 30 12.99 29.16 11.025 27.75C12.99 26.34 15.39 25.5 18 25.5C20.61 25.5 23.01 26.34 24.975 27.75C23.01 29.16 20.61 30 18 30ZM27.21 25.68C24.5826 23.6186 21.3396 22.4982 18 22.4982C14.6604 22.4982 11.4174 23.6186 8.79 25.68C6.98538 23.528 5.99745 20.8085 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 20.925 28.95 23.595 27.21 25.68Z"
        fill={color}
      />
      <path
        d="M18 8.89502C15.105 8.89502 12.75 11.25 12.75 14.145C12.75 17.04 15.105 19.395 18 19.395C20.895 19.395 23.25 17.04 23.25 14.145C23.25 11.25 20.895 8.89502 18 8.89502ZM18 16.395C16.755 16.395 15.75 15.39 15.75 14.145C15.75 12.9 16.755 11.895 18 11.895C19.245 11.895 20.25 12.9 20.25 14.145C20.25 15.39 19.245 16.395 18 16.395Z"
        fill={color}
      />
    </svg>
  );
};

export default AccountFilledIcon;
