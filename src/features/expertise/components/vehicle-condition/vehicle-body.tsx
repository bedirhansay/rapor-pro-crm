import { ColorHeader } from '@/components/ColorHeader'
import { FormControl, InputLabel, MenuItem, Popover, Select } from '@mui/material'
import { useState } from 'react'

export const VehicleBodyInfo = () => {
  const items = [
    { id: 1, label: 'Boyalı', color: '#FFD580' },
    { id: 2, label: 'Değişen', color: '#FF6F61' },
    { id: 3, label: 'Lokal Boyalı', color: '#FFA07A' },
    { id: 4, label: 'Orijinal', color: '#F0F0F0' },
    { id: 5, label: 'Boyalı İşlemli', color: '#D1C4E9' },
    { id: 6, label: 'Dolu Göçüğü', color: '#ADD8E6' },
    { id: 7, label: 'Hasarlı', color: '#D3D3D3' },
    { id: 8, label: 'Ezik/Göçük', color: '#90EE90' },
    { id: 9, label: 'Sökülüp Takılmış', color: '#87CEEB' },
  ]

  const [selectedParts, setSelectedParts] = useState<Record<string, string>>({})
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [currentPart, setCurrentPart] = useState<string>('')

  const togglePart = (partId: string, event: any) => {
    setCurrentPart(partId)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (event: any) => {
    const value = event.target.value as string
    setSelectedParts((prevState) => ({
      ...prevState,
      [currentPart]: value,
    }))
  }

  const isPopoverOpen = Boolean(anchorEl)

  const onColor = (partId: string) => {
    const selectedItem = items.find((item) => item.label === selectedParts[partId])
    return selectedItem ? selectedItem.color : 'white'
  }

  return (
    <div className="grid h-full w-full grid-cols-1 items-center justify-center gap-3">
      <div className="flex h-full w-full flex-col lg:flex-row">
        <ColorHeader />
        <div className="w-full">
          <svg
            className="h-auto max-w-3xl rotate-90 lg:ml-60"
            viewBox="0 0 600 700"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* //! DIŞ ÇİZGİLER  */}

            <path
              id="sagDis"
              className="st2"
              d="M315,319v125.5l40.5,96v9.5s-1.4,7.9,10.5,14h24.5l.8,5.7h26.7s10.2-2.8,10.6-20.5.9-43.2.9-43.2c0,0-45.5-.5-42.2-41.5,0,0-.5-36,45.7-36v-206.5s-49.6,5.1-46.5-40,46.2-36.8,46.2-36.8v-46.5h-9v6.5l-6.5-6.5h-17.2l-18,5.2s-9.8,9.9-14.8,43.7-6.8,60.8-6.8,60.8l-37,77.5-8.5,33Z"
            />
            <path
              id="solDis"
              className="st2"
              d="M188.3,319v115.5c0,6.6-1.3,13.2-3.9,19.3l-36.6,86.7v9.5s1.4,7.9-10.5,14h-24.5s-.8,5.7-.8,5.7h-26.7s-10.2-2.8-10.6-20.5-.9-43.2-.9-43.2c0,0,44.8,4.8,43-42,0,0-.2-35.5-46.5-35.5v-206.5s48.6,5.1,46.5-40-46.2-36.8-46.2-36.8v-46.5h9v6.5s6.5-6.5,6.5-6.5h17.2s18,5.3,18,5.3c0,0,9.8,9.9,14.7,43.7,5,33.8,6.7,60.8,6.7,60.8l37,77.5,8.5,33Z"
            />

            {/* //! KAPILAR  */}

            <g id="sagArkaKapi">
              <path
                style={{ fill: onColor('sagArkaKapi'), cursor: 'pointer' }}
                onClick={(event) => togglePart('sagArkaKapi', event)}
                className="st1"
                d="M426.3,350v73.4s-33.6-.8-43.5,31.5h-20.5l-39-17.5v-79.5l47.5-8h55.5Z"
              />
              <polygon className="st1" points="359.8 358.9 359.8 445.9 323.3 434.4 323.3 363.4 359.8 358.9" />
              <rect className="st1" x="371.3" y="424.3" width="3" height="21.2" />
            </g>

            <g id="solArkaKapi">
              <path
                style={{ fill: onColor('solArkaKapi'), cursor: 'pointer' }}
                onClick={(event) => togglePart('solArkaKapi', event)}
                className="st1"
                d="M75.4,348.8v74.4s33.6-.8,43.5,31.5h20.5s39-17.5,39-17.5v-80.4s-47.5-8-47.5-8h-55.5Z"
              />
              <polygon className="st1" points="142 358.7 142 445.7 178.5 434.2 178.5 363.2 142 358.7" />
              <rect
                className="st1"
                x="127.5"
                y="424.1"
                width="3"
                height="21.2"
                transform="translate(257.9 869.4) rotate(-180)"
              />
            </g>

            <g id="sagOnKapi">
              <path
                style={{ fill: onColor('sagOnKapi'), cursor: 'pointer' }}
                onClick={(event) => togglePart('sagOnKapi', event)}
                className="st1"
                d="M426.4,350v-99.9s1-11.4-7.5-11.4-48.5-.3-48.5-.3c0,0-8.2.7-15.4,14.2s-30.1,64.5-30.1,64.5l-1.5,41,47.5-8h55.5Z"
              />
              <polygon className="st1" points="323.8 353.5 358.3 345 358.3 278.3 343.8 275.6 324.8 317 323.8 353.5" />
              <polyline className="st1" points="358.3 278.3 360.3 252.5 355 252.5" />
              <rect className="st1" x="371" y="318.2" width="3" height="21.2" />
            </g>

            <g id="solOnKapi">
              <path
                style={{ fill: onColor('solOnKapi'), cursor: 'pointer' }}
                onClick={(event) => togglePart('solOnKapi', event)}
                className="st1"
                d="M75.4,348.8v-99.9s-1-11.4,7.5-11.4c8.5,0,48.5-.3,48.5-.3,0,0,8.2.7,15.4,14.2,7.1,13.5,30.1,64.5,30.1,64.5l1.5,41-47.5-8h-55.5Z"
              />
              <rect
                className="st1"
                x="127.8"
                y="317.1"
                width="3"
                height="21.2"
                transform="translate(258.5 655.3) rotate(-180)"
              />
              <polygon className="st1" points="178 352.3 143.5 343.8 143.5 277.2 158 274.4 177 315.8 178 352.3" />
              <polyline className="st1" points="143.5 277.2 141.5 251.3 146.8 251.3" />
            </g>

            {/* //! TAMPONLAR */}

            <path
              style={{ fill: onColor('solArkaTampon'), cursor: 'pointer' }}
              onClick={(event) => togglePart('solArkaTampon', event)}
              id="solArkaTampon"
              className="st1"
              d="M111.3,489.5v80.2h-24.5c-1.3-.3-3.1-1-4.9-2.2-6.6-4.7-7.3-14-7.6-23-.4-10.4-.6-23.3,0-38.5,0,0,24.8,3.2,37-16.5Z"
            />
            <path
              style={{ fill: onColor('solArkaTampon'), cursor: 'pointer' }}
              onClick={(event) => togglePart('solArkaTampon', event)}
              id="arkaTampon"
              className="st2"
              d="M165.8,614c0,.4,0,.7,0,1.1.8,33.9,38.8,20.3,44.7,17.9s1.1-.3,1.6-.3h83.3c.6,0,1.1.1,1.7.3,44.1,17.9,40.2-19,40.2-19v-11h-172.2l.8,12.1"
            />
            <path
              style={{ fill: onColor('solArkaTampon'), cursor: 'pointer' }}
              onClick={(event) => togglePart('solArkaTampon', event)}
              id="sagArkaTampon"
              className="st1"
              d="M391.3,486.4v83.2s24.5,0,24.5,0c1.3-.3,3.1-1,4.9-2.2,6.6-4.7,7.3-14,7.6-23,.4-10.4,1.8-23.3,1.2-38.5,0,0-28.7-1.3-38.2-19.5Z"
            />

            <path
              style={{ fill: onColor('onTampon'), cursor: 'pointer' }}
              onClick={(event) => togglePart('onTampon', event)}
              id="solOnTamponYan"
              className="st1"
              d="M107.3,120.7v35.6s-12.3-13.4-36.8-11v-46.5h9v6.5l6.5-6.5h17.2v21.3l4,.7Z"
            />
            <path
              style={{ fill: onColor('onTampon'), cursor: 'pointer' }}
              onClick={(event) => togglePart('onTampon', event)}
              id="sagOnTamponYan"
              className="st1"
              d="M393.8,121.2l.3,37.6s14.1-15.9,38.6-13.5v-46.5s-9,0-9,0v6.5s-6.5-6.5-6.5-6.5l-19.1.7c-.1,0-.3.1-.3.3v21s-4,.4-4,.4Z"
            />
            <path
              style={{ fill: onColor('onTampon'), cursor: 'pointer' }}
              onClick={(event) => togglePart('onTampon', event)}
              id="onTampon"
              className="st2"
              d="M164.5,84.3s-4-37.9,14-37.9h146.3c3,0,5.8,1.4,7.6,3.8,3.5,4.7,7.8,15.5,5.6,34.1h-173.5Z"
            />

            {/* //! KAPUT */}
            <path
              style={{ fill: onColor('kaput'), cursor: 'pointer' }}
              onClick={(event) => togglePart('kaput', event)}
              id="onKaput"
              className="st2"
              d="M172.2,222.8l4.5-101.3s4.9-18.7,41.7-18.7h74s33.5,2.1,33.5,19.2,4.5,102,4.5,102c0,0-23.5-17-37.2-18.5s-84.5,0-84.5,0c0,0-15.9.5-35.9,17.6-.2.2-.5,0-.5-.2Z"
            />

            {/* //! MArşpiyel */}

            <rect
              id="solMarspiyel"
              style={{ fill: onColor('solMarspiyel'), cursor: 'pointer' }}
              onClick={(event) => togglePart('solMarspiyel', event)}
              className="st0"
              x="69.8"
              y="233"
              width="5.7"
              height="195.5"
            />
            <rect
              style={{ fill: onColor('sagMarspiyel'), cursor: 'pointer' }}
              onClick={(event) => togglePart('sagMarspiyel', event)}
              id="sagMarspiyel"
              className="st0"
              x="426.4"
              y="233"
              width="6.6"
              height="195.5"
            />

            {/*  //! ÇAMURLUKLAR  */}
            <path
              style={{ fill: onColor('solOnCamurluk'), cursor: 'pointer' }}
              onClick={(event) => togglePart('solOnCamurluk', event)}
              id="solOnCamurluk"
              className="st0"
              d="M142.8,208.5l11.7,24.5h-84.2c0-3.7.2-7.3.2-11,24.9,3,46.3-11.1,46.3-37.6s-20.8-42.2-46.3-39.2v-46.5h9v6.5l6.5-6.5h17.2l18,5.2s11.6,14.1,15.1,46.1l6.4,58.4Z"
            />
            <path
              style={{ fill: onColor('sagOnCamurluk'), cursor: 'pointer' }}
              onClick={(event) => togglePart('sagOnCamurluk', event)}
              id="sagOnCamurluk"
              className="st0"
              d="M359.7,208.5l-11.7,24.5h84.2c0-3.7-.2-7.3-.2-11-24.9,3-46.3-11.1-46.3-37.6,0-27.3,20.8-42.2,46.3-39.2v-46.5s-9,0-9,0v6.5s-6.5-6.5-6.5-6.5h-17.2s-18,5.2-18,5.2c0,0-11.6,14.1-15.1,46.1l-6.4,58.4Z"
            />
            <path
              style={{ fill: onColor('solArkaCamurluk'), cursor: 'pointer' }}
              onClick={(event) => togglePart('solArkaCamurluk', event)}
              id="solArkaCamurluk"
              className="st0"
              d="M143.7,540.5v-39.9c0-6.1-5-11.1-11.1-11.1h-21.2c-10.7,18.5-36.8,16.5-36.8,16.5v42.4c.2,18,10.8,21.3,10.8,21.3h26.7l.8-5.7h24.5c1.5-.6,3.9-1.3,6.6-4.7l-.2-18.8Z"
            />
            <path
              style={{ fill: onColor('sagArkaCamurluk'), cursor: 'pointer' }}
              onClick={(event) => togglePart('sagArkaCamurluk', event)}
              id="sagArkaCamurluk"
              className="st0"
              d="M360.1,540.5v-39.9c0-6.1,5-11.1,11.1-11.1l20.7-.5c11.5,16.1,37.3,17,37.3,17v42.4c-.2,18-10.8,21.3-10.8,21.3h-26.7s-.8-5.7-.8-5.7h-24.5c-1.5-.6-3.9-1.3-6.6-4.7l.2-18.8Z"
            />

            {/* //! BAGAJ  */}
            <path
              style={{ fill: onColor('bagaj'), cursor: 'pointer' }}
              onClick={(event) => togglePart('bagaj', event)}
              id="bagaj"
              className="st2"
              d="M165,601.8c.8-1.8,3.3-5.3,8-5.3v-28l5.6-5.6h147.1l4.6,4.6v29.1s5.9,1.2,6.9,5.4-.3,1.3-1,1.3l-170.7-.6c-.4,0-.7-.4-.6-.9Z"
            />

            <g id="onCam">
              <path
                className="st2"
                d="M249.6,205.2h-38.4c-18,0-38.9,18.2-38.9,18.2l17.6,70s19.5-9,31.4-9h60.8s18.2,1.9,30.6,8l17.7-68.5s-22-18.8-40.8-18.8c-18.9,0-40.3,0-40.3,0"
              />
            </g>
            <path
              style={{ fill: onColor('tavan'), cursor: 'pointer' }}
              onClick={(event) => togglePart('tavan', event)}
              id="tavan"
              className="st2"
              d="M190.5,293.3c-.2.1-.5.4-.4.6.8,2.8,6.3,16.2,6.3,29.4s-.6,113.9-.6,113.9c0,0-1.9,14.6-3.9,20.2s.2,3.2,1.7,3.6c4.8,1.5,18.2,3.4,55.7,3.4,59.9,0,62-6,62-6l-4.4-14.4v-124.6l5.8-27.2s-21.5-8.3-31.7-8.3h-60.8s-17.2,3.4-29.7,9.3Z"
            />
            <path
              id="arkaCam"
              className="st2"
              d="M316.3,518.5l-5-58.7c-11,4-27.5,4.4-27.5,4.4h-54.5c-33.2,0-37.9-4.4-37.9-4.4,0,0-4.5,44.5-5.6,62.3v10s21.2,12,42.7,12h48.3s22.4-1.4,40-13.5l-.5-12.1Z"
            />
            <path
              style={{ fill: onColor('bagaj'), cursor: 'pointer' }}
              onClick={(event) => togglePart('bagaj', event)}
              id="arkaBagajCizgi"
              className="st2"
              d="M185.8,531.8c.4-.2,23.3,12.8,41.8,12.8h49s29.5-4.2,39.8-13.7c.2-.2.5,0,.5.2v16.3s-2.2,13.7-20,13.7h-99.6s-11.3-3.2-11.3-16.2v-13.2Z"
            />

            <path id="solOnFarYan" className="st1" d="M103.3,98.7v21.3s16.9,3,18-6.5.8-9.3.8-9.3l-18.8-5.4Z" />
            <path
              id="sagOnFarYan"
              className="st1"
              d="M397.8,99.5v21.3s-16.1,3-17-6.5l-.6-6.1c-.2-1.9,1.1-3.9,3-4.4l14.7-4.2Z"
            />

            <path
              id="sagOnKaputCizgi"
              className="st1"
              d="M358.6,212.5l3.3,15.5,18.5-112-.8-8.7s-11.9,9.5-19.1,101.2l-1.9,4Z"
            />
            <path
              id="solOnKaputCizgi"
              className="st1"
              d="M144.7,212.5l-3.3,15.5-18.5-112,.8-8.7s11.9,9.5,19.1,101.2l1.9,4Z"
            />

            <path
              id="solArkaFarYan"
              className="st1"
              d="M121.3,564v-17.7c0-1.4,1.1-2.5,2.5-2.5h16c1.4,0,2.5,1.1,2.5,2.5v14.8l-5,3h-16Z"
            />

            <path
              id="sagArkaFarYan"
              className="st1"
              d="M381.3,564v-17.7c0-1.4-1.1-2.5-2.5-2.5h-16c-1.4,0-2.5,1.1-2.5,2.5v13.8l5.5,3.8,15.5.2Z"
            />
            <path id="solArkaKelebek" className="st1" d="M143.7,457.2l34.8-16.8-26.1,45.5s-8.7,4.3-8.7-4v-24.8Z" />
            <path
              id="sagArkaKelebek"
              className="st1"
              d="M358.5,457.3l-34.8-16.8,26.1,45.5s8.7,4.3,8.7-4c0-8.3,0-24.8,0-24.8Z"
            />

            <path
              id="sagOnTekerOnGorunum"
              d="M336.5,58.8V18.2s1-4.9-13.5-4.9-13.8,4.9-13.8,4.9c0,9.4,0,18.8,0,28.2,2.5,0,5.5,0,9,0,7.2,0,8.2,0,9.5.5,1.8.6,6,2.8,8.8,11.9Z"
            />
            <path
              id="solOnTekerOnGorunum"
              d="M166.4,57c-.1.3,0,.2,0-.1V18.2s-1-4.9,13.5-4.9,13.7,4.9,13.7,4.9c0,9.4,0,18.8,0,28.2-2.5,0-5.5,0-9,0-7.2,0-8.2,0-9.5.5-1.7.6-6.1,2.5-8.8,10.1Z"
            />
            <path
              id="sagArkaTekerArkaGorunum"
              className="st3"
              d="M337.4,618.5l-1,41.1s1,4.9-13.5,4.9-13.8-4.9-13.8-4.9c0-9.4,0-13.4,0-22.8,2.5,0,5.5,1.5,9,1.5,7.2,0,12.6-4.3,13.2-5.2,1-1.6,3.3-5.5,6-14.6Z"
            />
            <path
              id="solArkaTekerArkaGorunum"
              d="M165.1,616.8c0-.3.4,9.2.4,9.5v34.7s-1,4.4,14,4.4,14.2-4.4,14.2-4.4c0-8.4,0-15.4,0-23.9-2.5,0-5.7,0-9.3,0-7.4,0-8.5-3.5-9.8-3.9-1.8-.5-8.3-7.9-9.5-16.5Z"
            />

            <g id="solArkaStop">
              <path
                className="st1"
                d="M175,567h10.2c1,0,1.8.6,2.2,1.5l9.7,25.5c.6,1.5-.5,3.2-2.2,3.2h-20.5c-1-.1-1.8-1-1.8-2l.7-26.6c0-.9.7-1.6,1.6-1.6Z"
              />
              <line className="st1" x1="173.2" y1="586.9" x2="194.4" y2="586.9" />
            </g>
            <g id="solArkaStop1" data-name="solArkaStop">
              <path
                className="st1"
                d="M328.4,567h-10.2c-1,0-1.8.6-2.2,1.5l-9.7,25.5c-.6,1.5.5,3.2,2.2,3.2h20.5c1-.1,1.8-1,1.8-2l-.7-26.6c0-.9-.7-1.6-1.6-1.6Z"
              />
              <line className="st1" x1="330.2" y1="586.9" x2="309" y2="586.9" />
            </g>
            <path
              id="onEk"
              className="st1"
              d="M198.5,54.5h105.9c1.9,0,3.7.7,5,2.1l9.2,9.2c1.2,1.2.3,3.2-1.3,3.2h-131.7c-1.7,0-2.5-2-1.3-3.2l9.2-9.2c1.3-1.3,3.2-2.1,5.1-2.1Z"
            />

            {/* //! PLAKALAR  */}
            <rect id="arkaPlaka" className="st1" x="222.3" y="573" width="58" height="15.5" rx="4.2" ry="4.2" />
            <rect id="onPlaka" className="st1" x="222.3" y="69" width="58" height="11.8" rx="4.2" ry="4.2" />
            <path
              id="sagOnFar"
              className="st1"
              d="M331.9,84.3h-36.2s-1.4,3.1-1.4,3.1c-1,2.2-.7,4.8.7,6.8l5.2,9.5h29.8c1.2,0,2.2-1,2.1-2.2v-17.3Z"
            />
            <path
              id="solOnFar"
              className="st1"
              d="M170.4,84.6h36.2l1.4,3.1c1,2.2.7,4.8-.7,6.8l-5.2,9.5h-29.8c-1.2,0-2.1-1-2.1-2.1v-17.3Z"
            />
            <path id="onEk2" className="st1" d="M233.2,86.3h36s14.5.4,14.5,14.5h-64.6s-2.6-14.5,14.1-14.5Z" />

            <g id="tekerOnSag">
              <circle cx="426" cy="183.4" r="32.9" />
              <circle className="st4" cx="426" cy="183.4" r="21.3" />
            </g>
            <g id="tekerArkaSag">
              <circle cx="426" cy="467.6" r="32.9" />
              <circle className="st4" cx="426" cy="467.6" r="21.3" />
            </g>
            <g id="tekerArkaSol">
              <circle cx="77.7" cy="467.6" r="32.9" />
              <circle className="st4" cx="77.7" cy="467.6" r="21.3" />
            </g>
            <g id="tekerOnSol">
              <circle cx="77.7" cy="183.4" r="32.9" />
              <circle className="st4" cx="77.7" cy="183.4" r="21.3" />
            </g>
          </svg>
        </div>
      </div>

      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <div className="flex items-center rounded-lg border-2 border-blue-400 px-8 py-4">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-status-label">Durum</InputLabel>
            <Select
              labelId="select-status-label"
              value={selectedParts[currentPart] || ''}
              label="Durum"
              onChange={handleChange}
            >
              {items.map((item) => (
                <MenuItem key={item.id} value={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Popover>
    </div>
  )
}
