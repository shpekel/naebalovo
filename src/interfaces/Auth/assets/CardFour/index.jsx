import React from 'react'
const CardFour = ({fullName, cardNumber, type}) => {
    return (
        <svg
            className={`card-image ${type === 1 ? '_active' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 0 86 54'
      >
          <defs>
              <style>
                  {
                      '\n      .design-4-cls-1 {\n        letter-spacing: -.03em;\n      }\n\n      .design-4-cls-2 {\n        letter-spacing: -.06em;\n      }\n\n      .design-4-cls-3 {\n        letter-spacing: 0em;\n      }\n\n      .design-4-cls-4 {\n        fill: #73ff7d;\n      }\n\n      .design-4-cls-5 {\n        letter-spacing: 0em;\n      }\n\n      .design-4-cls-6 {\n        fill: #717070;\n      }\n\n      .design-4-cls-7 {\n        letter-spacing: -.03em;\n      }\n\n      .design-4-cls-8 {\n        fill: #ffd54f;\n      }\n\n      .design-4-cls-9 {\n        font-size: 8.21px;\n      }\n\n      .design-4-cls-9, .design-4-cls-10, .design-4-cls-11, .design-4-cls-12 {\n        fill: #005b04;\n      }\n\n      .design-4-cls-9, .design-4-cls-10, .design-4-cls-12 {\n        font-family: MyriadPro-Bold, \'Myriad Pro\';\n        font-weight: 700;\n      }\n\n      .design-4-cls-13 {\n        fill: #fff;\n        isolation: isolate;\n        opacity: .2;\n      }\n\n      .design-4-cls-10 {\n        font-size: 7.53px;\n      }\n\n      .design-4-cls-14 {\n        letter-spacing: -.06em;\n      }\n\n      .design-4-cls-12 {\n        font-size: 4.64px;\n      }\n    '
                  }
              </style>
          </defs>
          <path
              className='design-4-cls-4'
              d='m53.31,36.04h-20.63c-4.27,0-7.74,3.46-7.74,7.74v10.23h36.1v-10.23c0-4.27-3.46-7.74-7.74-7.74Z'
          />
          <circle className='design-4-cls-4' cx={43} cy={12.83} r={7.74} />
          <path
              className='design-4-cls-4'
              d='m84,0h-39.71c6.52.65,11.61,6.14,11.61,12.83,0,7.12-5.77,12.89-12.89,12.89-7.12,0-12.88-5.78-12.89-12.89,0-6.69,5.09-12.18,11.61-12.83H2C.9,0,0,.9,0,2v50c0,1.1.9,2,2,2h17.79v-10.23c0-7.12,5.78-12.88,12.89-12.89h20.63c7.12,0,12.88,5.78,12.89,12.89v10.23h17.79c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2Z'
          />
          <path
              className='design-4-cls-11'
              d='m9.16,21.43v-8.2h2.17l1.7,3.01c.49.86.97,1.89,1.34,2.81h.04c-.12-1.08-.16-2.19-.16-3.42v-2.4h1.7v8.2h-1.95l-1.75-3.16c-.49-.88-1.02-1.93-1.42-2.9h-.04c.05,1.1.07,2.25.07,3.59v2.47h-1.7Z'
          />
          <path
              className='design-4-cls-11'
              d='m19.46,19.33l-.58,2.1h-1.92l2.51-8.2h2.43l2.54,8.2h-2l-.63-2.1h-2.35Zm2.08-1.39l-.51-1.74c-.15-.49-.29-1.1-.41-1.58h-.02c-.12.49-.24,1.11-.38,1.58l-.49,1.74h1.81Z'
          />
          <path
              className='design-4-cls-11'
              d='m30.41,17.96h-3.02v1.95h3.37v1.52h-5.23v-8.2h5.06v1.52h-3.2v1.7h3.02v1.51Z'
          />
          <path
              className='design-4-cls-11'
              d='m32.03,13.34c.49-.1,1.47-.17,2.4-.17,1.13,0,1.82.11,2.42.46.57.3.99.86.99,1.61s-.43,1.41-1.35,1.75v.02c.94.26,1.63.96,1.63,2.02,0,.74-.34,1.33-.85,1.74-.6.47-1.59.74-3.22.74-.91,0-1.59-.06-2.01-.12v-8.05Zm1.84,3.14h.61c.97,0,1.5-.4,1.5-1.01s-.47-.95-1.31-.95c-.4,0-.63.02-.79.05v1.91Zm0,3.64c.18.02.4.02.72.02.84,0,1.58-.32,1.58-1.18s-.74-1.16-1.67-1.16h-.63v2.31Z'
          />
          <path
              className='design-4-cls-11'
              d='m41.24,19.33l-.58,2.1h-1.92l2.51-8.2h2.43l2.54,8.2h-2l-.63-2.1h-2.35Zm2.08-1.39l-.51-1.74c-.15-.49-.29-1.1-.41-1.58h-.02c-.12.49-.24,1.11-.38,1.58l-.49,1.74h1.81Z'
          />
          <path
              className='design-4-cls-11'
              d='m47.31,13.23h1.86v6.64h3.26v1.56h-5.12v-8.2Z'
          />
          <path
              className='design-4-cls-11'
              d='m60.57,17.25c0,2.69-1.63,4.32-4.03,4.32s-3.86-1.84-3.86-4.17c0-2.46,1.57-4.29,3.99-4.29s3.89,1.89,3.89,4.15Zm-5.93.11c0,1.61.75,2.74,2,2.74s1.97-1.19,1.97-2.79c0-1.47-.71-2.74-1.98-2.74s-1.98,1.19-1.98,2.79Z'
          />
          <path
              className='design-4-cls-11'
              d='m63.63,21.43l-2.63-8.2h2.03l1,3.47c.28.97.54,1.91.73,2.93h.04c.21-.99.46-1.96.74-2.9l1.05-3.5h1.97l-2.76,8.2h-2.17Z'
          />
          <path
              className='design-4-cls-11'
              d='m76.84,17.25c0,2.69-1.63,4.32-4.03,4.32s-3.86-1.84-3.86-4.17c0-2.46,1.57-4.29,3.99-4.29s3.89,1.89,3.89,4.15Zm-5.93.11c0,1.61.75,2.74,2,2.74s1.97-1.19,1.97-2.79c0-1.47-.71-2.74-1.98-2.74s-1.98,1.19-1.98,2.79Z'
          />
          <text className='design-4-cls-9' transform='translate(12.79 31.35)'>
              <tspan className='design-4-cls-5' x={0} y={0}>
                  {fullName}
              </tspan>
          </text>
          <text className='design-4-cls-10' transform='translate(7.29 40.9)'>
              <tspan x={0} y={0}>
                  {cardNumber}
              </tspan>
          </text>
          <text className='design-4-cls-12' transform='translate(7.47 45.68)'>
              <tspan x={0} y={0}>
                  {'09 28'}
              </tspan>
          </text>
          <path
              className='design-4-cls-8'
              d='m83,42.37v8.01c0,.32-.26.59-.59.59h-9.87c-.32,0-.59-.26-.59-.59v-8.01c0-.32.26-.59.59-.59h9.87c.32,0,.59.26.59.59Z'
          />
          <path
              className='design-4-cls-13'
              d='m80.83,43.72l1.71-1.71h-.56l-1.87,1.87-.23.23-.71.72-.23.23h-2.56l-1.18-1.18-.38-.39-1.48-1.48h-.55l1.47,1.48.23.23h-2.35v.39h2.75l.73.74.19.21v.46h-3.68v.39h3.68v1.4h-3.68v.39h3.68v.46h.01l-.71.72-.23.23h-2.75v.39h2.36l-1.48,1.48h.55l1.48-1.48,1.34-1.34h2.55l2.81,2.82h.56l-1.48-1.48h2.17v-.39h-2.56l-.95-.95h.02v-.46h3.48v-.39h-3.48v-1.4h3.48v-.39h-3.48v-.46h-.02l.95-.95h2.56v-.39h-2.17Zm-1.71,4.04h-2.9v-2.32h2.9s0,2.32,0,2.32Z'
          />
          <path
              className='design-4-cls-6'
              d='m76.2,44.83l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm-.56,0v3.09h3.69v-3.09h-3.69Zm3.29,2.71h-2.9v-2.32h2.9v2.32Zm-2.73-2.71l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm2.39,2.93l-.23-.23h-1.76l-.23.23h-.01l-.15.16h2.55l-.17-.16Zm-2.39-2.93l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Zm0,0l.23.23h.01l.16.16h1.77l.39-.39h-2.56Z'
          />
          <polygon
              className='design-4-cls-6'
              points='74.87 43.5 75.26 43.89 71.96 43.89 71.96 43.5 74.87 43.5'
          />
          <polygon
              className='design-4-cls-6'
              points='83 43.5 83 43.89 79.69 43.89 80.08 43.5 83 43.5'
          />
          <rect
              className='design-4-cls-6'
              x={71.96}
              y={45.29}
              width={4.07}
              height={0.39}
          />
          <rect
              className='design-4-cls-6'
              x={78.93}
              y={45.29}
              width={4.07}
              height={0.39}
          />
          <rect
              className='design-4-cls-6'
              x={71.96}
              y={47.08}
              width={4.07}
              height={0.39}
          />
          <rect
              className='design-4-cls-6'
              x={78.93}
              y={47.08}
              width={4.07}
              height={0.39}
          />
          <polygon
              className='design-4-cls-6'
              points='75.26 48.87 74.87 49.26 71.96 49.26 71.96 48.87 75.26 48.87'
          />
          <polygon
              className='design-4-cls-6'
              points='83 48.87 83 49.26 80.08 49.26 79.69 48.87 83 48.87'
          />
          <polygon
              className='design-4-cls-6'
              points='76.59 47.54 73.16 50.97 72.61 50.97 76.04 47.54 76.59 47.54'
          />
          <polygon
              className='design-4-cls-6'
              points='82.35 41.79 78.91 45.22 78.36 45.22 81.79 41.79 82.35 41.79'
          />
          <polygon
              className='design-4-cls-6'
              points='76.59 45.22 76.04 45.22 72.61 41.79 73.16 41.79 76.59 45.22'
          />
          <polygon
              className='design-4-cls-6'
              points='82.35 50.97 81.79 50.97 78.75 47.93 78.59 47.77 78.36 47.54 78.91 47.54 79.13 47.75 79.3 47.93 79.52 48.14 80.25 48.87 80.47 49.1 80.64 49.26 80.86 49.49 82.35 50.97'
          />
      </svg>
  )
}

export default CardFour