import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 459" {...props}>
      <circle
        fill="#fff"
        stroke="#000"
        strokeWidth={28.5}
        cx={84.925}
        cy={251.767}
        r={46}
      />
      <circle cx={85.549} cy={250.979} r={16.253} />
      <circle
        fill="#fff"
        stroke="#000"
        strokeWidth={28.5}
        cx={84.925}
        cy={378.433}
        r={46}
      />
      <circle
        fill="#fff"
        stroke="#000"
        strokeWidth={28.5}
        cx={82.925}
        cy={124.433}
        r={46}
      />
      <path fill="#fff" d="M19.85 121.128h40v5.187h-40z" />
      <path d="M41.846 27.823l27.51 5.774-18.28 87.098-27.51-5.773z" />
      <path d="M125.399 27.644v29.581H41.858v-29.58zM81.956 231.179h6.001v16.003h-6.001z" />
      <path
        fill="#fff"
        d="M17.926 248.373h40v5.187h-40zm-1.1 125.322h40v5.187h-40z"
      />
      <circle cx={86} cy={377} r={16.253} />
      <path d="M81.956 358.24h6.001v16.003h-6.001z" />
      <circle cx={84} cy={124} r={16.253} />
      <path d="M80.455 104h6.001v16.003h-6.001z" />
    </svg>
  );
}

export default SvgComponent;
