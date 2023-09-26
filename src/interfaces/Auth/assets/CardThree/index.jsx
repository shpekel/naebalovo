import React from 'react'
const CardThree = ({fullName, cardNumber, type}) => {
    return (
        <svg
            className={`card-image ${type === 1 ? '_active' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 0 86 54'
      >
          <path
              fill="#ffec00"
              d='M76.34 11.32h-9.55l6.59 8.49 2.96-8.49zM60.9 11.32h-9.23l2.98 8.97 6.25-8.97zM48.83 12.19l-5.06 9.52h8.22l-3.16-9.52z'
          />
          <path
              fill="#353535"
              d='M1.31.13C.55.41 0 1.14 0 2v50c0 1.1.9 2 2 2h59.78L41.21 25.32 1.31.13z'
          />
          <path
              fill="#ffec00"
              d='M40.51 24.35c-.48-.67-.55-1.8-.17-2.52l6.47-12.17c.38-.72 1.37-1.31 2.18-1.31h29.7c.82 0 1.8.59 2.17 1.32l5.13 9.81V2c0-1.1-.9-2-2-2H2c-.24 0-.47.05-.69.13L41.2 25.32l-.7-.97z'
          />
          <path
              fill="#ffec00"
              d='M63.81 12.33l-6.53 9.38H71.1l-7.29-9.38zM79.05 12.58l-3.19 9.13h7.96l-4.77-9.13zM86 52V26.18L72.24 44.91l13.27 8.38c.3-.35.49-.8.49-1.3z'
          />
          <path
              fill="#353535"
              d='M72.24 44.92L65.57 54H84c.61 0 1.14-.28 1.51-.7l-13.27-8.38z'
          />
          <path
              fill="#ffec00"
              d='M52.98 24.68H44.4l3.49 4.86 8.48 5.36-3.39-10.22z'
          />
          <path
              fill="#353535"
              d='M56.37 34.9l-8.48-5.36 12.47 17.39-3.99-12.03z'
          />
          <path
              fill="#ffec00"
              d='M71.68 24.68H56.11l4.22 12.72 5.66 3.57 5.69-16.29z'
          />
          <path
              fill="#353535"
              d='M65.99 40.97l-5.66-3.57 3.36 10.14 2.3-6.57z'
          />
          <path
              fill="#ffec00"
              d='M83.42 24.68h-8.6L68.57 42.6l1.15.73 13.7-18.65z'
          />
          <path
              fill="#353535"
              d='M69.72 43.33l-1.15-.73-1.53 4.38 2.68-3.65z'
          />
          <path
              fill="#fff"
              d='M3 24.48v-4.39h1.16l.91 1.61c.26.46.52 1.01.72 1.5h.02c-.06-.58-.08-1.17-.08-1.83v-1.28h.91v4.39H5.6l-.94-1.69c-.26-.47-.55-1.03-.76-1.55h-.02c.03.59.04 1.2.04 1.92v1.32h-.91zM8.51 23.36l-.31 1.13H7.17l1.34-4.39h1.3l1.36 4.39H10.1l-.34-1.13H8.5zm1.11-.74l-.27-.93c-.08-.26-.16-.59-.22-.85h-.01c-.07.26-.13.59-.2.85l-.26.93h.97zM14.37 22.63h-1.61v1.04h1.8v.81h-2.8v-4.39h2.71v.81h-1.71v.91h1.61v.81zM15.23 20.15c.26-.05.79-.09 1.28-.09.61 0 .98.06 1.3.25.31.16.53.46.53.86s-.23.75-.72.94c.5.15.87.53.87 1.09 0 .4-.18.71-.46.93-.32.25-.85.4-1.72.4-.49 0-.85-.03-1.07-.07v-4.31zm.98 1.68h.33c.52 0 .8-.21.8-.54s-.25-.51-.7-.51c-.21 0-.34.01-.42.03v1.02zm0 1.95c.1.01.21.01.38.01.45 0 .85-.17.85-.63s-.4-.62-.89-.62h-.34v1.24zM20.16 23.36l-.31 1.13h-1.03l1.34-4.39h1.3l1.36 4.39h-1.07l-.34-1.13h-1.26zm1.11-.74l-.27-.93c-.08-.26-.16-.59-.22-.85h-.01c-.07.26-.13.59-.2.85l-.26.93h.97zM23.4 20.1h1v3.55h1.74v.83H23.4v-4.39zM30.5 22.24c0 1.44-.87 2.31-2.15 2.31s-2.06-.98-2.06-2.23c0-1.31.84-2.3 2.13-2.3s2.08 1.01 2.08 2.22zm-3.17.06c0 .86.4 1.46 1.07 1.46s1.05-.64 1.05-1.49c0-.79-.38-1.46-1.06-1.46s-1.06.64-1.06 1.49zM32.14 24.48l-1.41-4.39h1.09l.53 1.85c.15.52.29 1.02.39 1.57h.02c.11-.53.25-1.05.4-1.55l.56-1.87h1.05l-1.48 4.39h-1.16zM39.2 22.24c0 1.44-.87 2.31-2.15 2.31s-2.06-.98-2.06-2.23c0-1.31.84-2.3 2.13-2.3s2.08 1.01 2.08 2.22zm-3.17.06c0 .86.4 1.46 1.07 1.46s1.05-.64 1.05-1.49c0-.79-.38-1.46-1.06-1.46s-1.06.64-1.06 1.49z'
          />
          <path
              d='M14.04 42.38v8.01c0 .32-.26.59-.59.59H3.59c-.32 0-.59-.26-.59-.59v-8.01c0-.32.26-.59.59-.59h9.87c.32 0 .59.26.59.59z'
              fill='#ffd54f'
          />
          <path
              style={{ isolation: 'isolate' }}
              d='M11.88 43.73l1.71-1.71h-.56l-1.87 1.87-.23.23-.71.72-.23.23H7.43l-1.18-1.18-.38-.39-1.48-1.48h-.55l1.47 1.48.23.23H3.19v.39h2.75l.73.74.19.21v.46H3.18v.39h3.68v1.4H3.18v.39h3.68v.46h.01l-.71.72-.23.23H3.18v.39h2.36l-1.48 1.48h.55l1.48-1.48 1.34-1.34h2.55l2.81 2.82h.56l-1.48-1.48h2.17v-.39h-2.56l-.95-.95h.02v-.46h3.48v-.39h-3.48v-1.4h3.48v-.39h-3.48v-.46h-.02l.95-.95h2.56v-.39h-2.17zm-1.71 4.04h-2.9v-2.32h2.9v2.32z'
              fill='#fff'
              opacity='.2'
          />
          <path
              fill="#717070"
              d='M7.24 44.84l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm-.56 0v3.09h3.69v-3.09H6.68zm3.29 2.71h-2.9v-2.32h2.9v2.32zm-2.73-2.71l.23.23h.01l.16.16h1.77l.39-.39H7.24zm2.39 2.93l-.23-.23H7.64l-.23.23H7.4l-.15.16H9.8l-.17-.16zm-2.39-2.93l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zm0 0l.23.23h.01l.16.16h1.77l.39-.39H7.24zM5.91 43.5l.4.39H3v-.39h2.91zM14.04 43.5v.39h-3.3l.39-.39h2.91z'
          />
          <path
              fill="#717070"
              d='M3 45.29h4.07v.39H3zM9.97 45.29h4.07v.39H9.97z'
          />
          <path
              fill="#717070"
              d='M3 47.09h4.07v.39H3zM9.97 47.09h4.07v.39H9.97z'
          />
          <path
              fill="#717070"
              d='M6.31 48.88l-.4.39H3v-.39h3.31zM14.04 48.88v.39h-2.91l-.39-.39h3.3z'
          />
          <path
              fill="#717070"
              d='M7.64 47.55L4.2 50.98h-.55l3.43-3.43h.56zM13.39 41.79l-3.43 3.44h-.55l3.43-3.44h.55z'
          />
          <path
              fill="#717070"
              d='M7.64 45.23h-.56l-3.43-3.44h.55l3.44 3.44zM13.39 50.98h-.55L9.8 47.94l-.17-.17-.23-.22h.56l.21.21.18.18.21.21.73.73.23.23.16.16.23.23 1.48 1.48z'
          />
          <path
              d='M27.5 41.79h-9.87c-.32 0-.59.26-.59.59v8.01c0 .32.26.59.59.59h9.87c.32 0 .59-.26.59-.59v-8.01c0-.32-.26-.59-.59-.59z'
              fill='#ecedf7'
          />
          <path
              d='M28.08 45.41v4.98c0 .32-.26.59-.59.59h-6.84l-3.62-3.62v-4.98c0-.32.26-.59.59-.59h6.84l3.62 3.62z'
              fill='#ff6c6c'
          />
          <path
              style={{ isolation: 'isolate' }}
              d='M27.5 41.79h-.34l-9.2 9.19h9.54c.32 0 .59-.26.59-.59v-8.01c0-.32-.26-.59-.59-.59z'
              fill='#040000'
              opacity='.2'
          />
          <text
              fill='#fff'
              fontFamily="MyriadPro-Bold,'Myriad Pro'"
              fontSize='4.39'
              fontWeight='700'
              transform='translate(3 29.79)'
          >
              <tspan className='cls-7' x='0' y='0'>
                  {fullName}
              </tspan>
          </text>
          <text
              fill='#fff'
              fontFamily="MyriadPro-Bold,'Myriad Pro'"
              fontSize='4.03'
              transform='translate(3.1 34.9)'
              fontWeight='700'
          >
              <tspan x='0' y='0'>
                  {cardNumber}
              </tspan>
          </text>
          <text
              fill='#222'
              fontFamily="MyriadPro-Bold,'Myriad Pro'"
              fontSize='4.64'
              fontWeight='700'
              transform='translate(71.93 6.08)'
          >
              <tspan x='0' y='0'>
                  09 28
              </tspan>
          </text>
      </svg>
  )
}

export default CardThree