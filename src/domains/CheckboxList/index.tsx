import React, { useEffect, useState } from 'react'

interface ICheckboxList {
  children: React.ReactNode
  selectedIndex: number
  onClick: (e: string) => void
  style?: React.CSSProperties
}

const CheckboxList = ({
  children,
  selectedIndex,
  onClick,
  style,
}: ICheckboxList): JSX.Element => {
  const [currentIdx, setCurrentIdx] = useState(selectedIndex)

  useEffect(() => {
    selectedIndex && setCurrentIdx(selectedIndex)
  }, [selectedIndex])

  const checkboxList = React.Children.map(children, (child, index) => {
    const checkBox = child as React.ReactElement

    if (React.isValidElement(child)) {
      return React.cloneElement(checkBox, {
        id: checkBox.props.id,
        name: checkBox.props.name,
        defaultChecked: index === currentIdx,
        onClick: (id: string): void => {
          if (index !== currentIdx) {
            setCurrentIdx(index)
            onClick && onClick(id)
          }
        },
      })
    }
  })

  return <div style={{ ...style }}>{checkboxList}</div>
}

export default CheckboxList
