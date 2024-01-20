function LoadingIcon() {
  return (
    // <?xml version="1.0" encoding="utf-8"?>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: none; display: block; shape-rendering: auto;"
      width="174px"
      height="174px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#6446ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.42372881355932207s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#6446ff;#01c99b;#ff6450;#5293ff;#6446ff"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#6446ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#5293ff">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.42372881355932207s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.42372881355932207s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#ff6450">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.8474576271186441s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.8474576271186441s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#01c99b">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.2711864406779663s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.6949152542372883s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.2711864406779663s"
        ></animate>
      </circle>
    </svg>
  );
}
export default LoadingIcon;
