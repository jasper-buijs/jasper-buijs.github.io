interface AlertProps {
  type: "success" | "warning" | "danger" | "info";
  hideIcon?: boolean;
  text: string;
}
const Alert = ({ type, hideIcon, text }: AlertProps) => {
  const backgroundColors = {
    success: "bg-[#d1e7dd]",
    warning: "bg-[#fff3cd]",
    danger: "bg-[#f8d7da]",
    info: "bg-[#cfe2ff]"
  }
  const textColors = {
    success: "text-[#0a3622]",
    warning: "text-[#664d03]",
    danger: "text-[#58151c]",
    info: "text-[#052c65]"
  }
  const broderColor = {
    success: "border-[#a3cfbb]",
    warning: "border-[#ffe69c]",
    danger: "border-[#f1aeb5]",
    info: "border-[#9ec5fe]"
  }
  const icons = {
    success: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" className="inline fill-[#0a3622] mr-1"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg>,
    warning: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" className="inline fill-[#664d03] mr-1"><path d="M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752ZM12 8.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 8.5Zm1 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"></path></svg>,
    danger: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" className="inline fill-[#58151c] mr-1"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z"></path></svg>,
    info: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" className="inline fill-[#052c65] mr-1"><path d="M13 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v4.25h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V12h-.75a.75.75 0 0 1-.75-.75Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path></svg>
  }
  return (
    <div className={`p-4 mx-12 my-4 l-0 r-0 h-fit relative ${backgroundColors[type]} ${textColors[type]} border-l-4 ${broderColor[type]} border-solid`}>
      {!hideIcon && icons[type]}
      {text}
    </div>
  );
}

export default Alert;